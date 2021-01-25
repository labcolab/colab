package firebaseservice

import (
	"context"
	"errors"

	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	"google.golang.org/api/option"
)

// FirebaseService for local use
type FirebaseService struct {
	FirebaseApp        *firebase.App
	FirebaseAuthClient *auth.Client
	Context            context.Context
	GetVerifiedUser    func(idToken string) (*auth.UserRecord, error)
}

// Init firebase app
func Init() (FirebaseService, error) {
	serviceAccountKeyJSON := GetServiceAccountJSON()
	opt := option.WithCredentialsJSON(serviceAccountKeyJSON)
	ctx := context.Background()
	app, err := firebase.NewApp(ctx, nil, opt)

	if err != nil {
		return FirebaseService{}, err
	}

	client, err := app.Auth(ctx)
	if err != nil {
		return FirebaseService{}, err
	}

	fs := FirebaseService{
		FirebaseApp:        app,
		Context:            ctx,
		FirebaseAuthClient: client,
	}

	fs.GetVerifiedUser = func(idToken string) (*auth.UserRecord, error) {
		return GetVerifiedUser(&fs, idToken)
	}

	return fs, err
}

// GetVerifiedUser from token
func GetVerifiedUser(fs *FirebaseService, idToken string) (*auth.UserRecord, error) {

	client := fs.FirebaseAuthClient
	ctx := fs.Context

	token, err := client.VerifyIDToken(fs.Context, idToken)
	if err != nil {
		return &auth.UserRecord{}, err
	}

	user, err := client.GetUser(ctx, token.UID)

	if err != nil {
		return user, err
	}

	if !user.EmailVerified {
		return user, errors.New("Email Not Verified")
	}

	return user, nil
}
