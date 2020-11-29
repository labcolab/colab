package date

import (
	"fmt"
	"net/http"
	"time"

	"github.com/labcolab/colab/lib/handlers/requesthandler"
)

// /date/now --> now
// /date/foo --> foo

//need to make it so that /date/* to go to one function --> need to condense subURLs!
func Date(w http.ResponseWriter, r *http.Request) {

	rh := requesthandler.New(r)

	rh.Get("/date/foo", func() {
		fmt.Fprintf(w, "foo!")
	})

	rh.Get("/date/bar", func() {
		fmt.Fprintf(w, "bar!")
	})

	rh.Get("/date/hello", func() {
		fmt.Fprintf(w, "hello!")
	})

	rh.Get("/currentDateTime", func() {
		currentTime := time.Now().Format(time.RFC850)
		fmt.Fprintf(w, currentTime)
	})

	rh.Get("/api/date", func() {
		currentTime := time.Now().Format(time.RFC850)
		fmt.Fprintf(w, currentTime)
	})

	rh.Get("/api/date", func() {
		fmt.Fprintf(w, "Duplicate - Should not be printed")
	})
}
