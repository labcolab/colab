package firebaseservice

import (
	"encoding/json"
	"os"
)

type serviceAccountKey struct {
	Type                    string `json:"type"`
	ProjectID               string `json:"project_id"`
	PrivateKeyID            string `json:"priate_key_id"`
	PrivateKey              string `json:"private_key"`
	ClientEmail             string `json:"client_email"`
	ClientID                string `json:"client_id"`
	AuthURI                 string `json:"auth_uri"`
	TokenURI                string `json:"token_uri"`
	AuthProviderX509CertURL string `json:"auth_provider_x509_cert_url"`
	ClientX506CertURL       string `json:"client_x509_cert_url"`
}

// GetServiceAccountJSON returns json credentials to be used in firebase admin sdk
func GetServiceAccountJSON() []byte {
	key := &serviceAccountKey{
		Type:                    "service_account",
		ProjectID:               os.Getenv("SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID"),
		PrivateKeyID:            os.Getenv("FIREBASE_ADMIN_PRIVATE_KEY_ID"),
		PrivateKey:              os.Getenv("FIREBASE_ADMIN_PRIVATE_KEY"),
		ClientEmail:             os.Getenv("FIREBASE_ADMIN_CLIENT_EMAIL"),
		ClientID:                os.Getenv("FIREBASE_ADMIN_CLIENT_ID"),
		AuthURI:                 "https://accounts.google.com/o/oauth2/auth",
		TokenURI:                "https://oauth2.googleapis.com/token",
		AuthProviderX509CertURL: "https://www.googleapis.com/oauth2/v1/certs",
		ClientX506CertURL:       os.Getenv("FIREBASE_ADMIN_CLIENT_X506_CERT_URL"),
	}

	json, _ := json.Marshal(key)
	return json
}
