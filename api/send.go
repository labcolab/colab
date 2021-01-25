package colab

import (
	"fmt"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/labcolab/colab/lib/firebaseservice"
	"github.com/labcolab/colab/lib/handlers/requesthandler"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

// Send email
func Send(w http.ResponseWriter, r *http.Request) {
	godotenv.Load()

	rh := requesthandler.New(r)
	firebaseService, err := firebaseservice.Init()

	if err != nil {
		fmt.Fprintf(w, "%v", err)
	}

	rh.Post("/api/send", func() {

		idToken := r.Form.Get("id_token")
		user, err := firebaseService.GetVerifiedUser(idToken)

		if err != nil {
				fmt.Fprintf(w, "{\"success\": false, \"response\": \"%v\"}", err)
		} else {
			from := mail.NewEmail("Colab Ninja No Reply", "no-reply@colab.ninja")
			replyTo := mail.NewEmail(user.DisplayName, user.Email)
			to := mail.NewEmail(r.Form.Get("to_name"), r.Form.Get("to_email"))
			c := mail.NewContent("text/html", "<strong>Hey Gokce! Your post has received a message</strong>")
			subject := "Dance project"
			message := mail.NewV3MailInit(from, subject, to, c)
			message.SetReplyTo(replyTo)
			client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
			_, err = client.Send(message)
			if err != nil {
				fmt.Fprintf(w, "{\"success\": false, \"response\": \"%v\"}", err)
			} else {
				fmt.Fprintf(w, "{\"success\": true }")
			}
		}

	})

}
