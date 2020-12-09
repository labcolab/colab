import React, { useState, useContext, useEffect } from 'react';
import ProjectBox from '../ProjectBox/ProjectBox';
import type { ProjectBoxProps } from '../ProjectBox/ProjectBox';
import { FirestoreContext } from '../../App';

const Feed = () => {
  const [projects, setProjects] = useState<ProjectBoxProps[]>();

  const firestore = useContext(FirestoreContext);

  useEffect(() => {
    const getFeed = async () => {
      const feed: ProjectBoxProps[] = [];
      try {
        const res = await firestore.collection('projects').get();
        res.forEach((doc) => {
          feed.push({
            avatar: 'avatar',
            title: doc.data().title,
            date: 'date',
            description: doc.data().description,
            roles: doc.data().roles,
            images: [],
          });
        });
        setProjects(feed);
      } catch (err) {
        console.log(`unable to get projects: ${err}`);
      }
    };
    getFeed();
  }, []);

  return (
    <div>
      <div>hello!</div>
      <div>{projects ? projects.length : 'Loading projects...'}</div>
    </div>
  );
};

export default Feed;
