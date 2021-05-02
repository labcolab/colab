import React, { ReactNode, createContext } from 'react';
import type firebase from 'firebase/app';
import { v4 as generateId } from 'uuid';
import { storage } from '../firebase/firebase';
import 'firebase/auth';

interface StorageData {
  storeImages: (selectedFiles: File[]) => Promise<string[]>;
}

interface StorageProviderProps {
  children: ReactNode;
}
export const StorageContext = createContext<StorageData>({} as StorageData);

const storeImages = async (selectedFiles: File[]): Promise<string[]> => {
  if (selectedFiles) {
    const snapshotPromises: firebase.storage.UploadTask[] = [];
    selectedFiles.forEach((file) => {
      const id = generateId();
      const extension = file.name.substr(file.name.lastIndexOf('.'));
      const newFilename = id + extension;
      const childRef = storage.child(newFilename);
      snapshotPromises.push(childRef.put(file));
    });
    const snapshots = await Promise.all(snapshotPromises);
    const urlPromises: Promise<string>[] = [];
    snapshots.forEach(({ ref }) => {
      urlPromises.push(ref.getDownloadURL());
    });
    const urls = await Promise.all(urlPromises);
    return urls;
  }
  return [];
};

export const StorageProvider = (props: StorageProviderProps) => (
  <StorageContext.Provider
    {...props}
    value={{
      storeImages,
    }}
  />
);
