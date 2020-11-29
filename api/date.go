package date

import (
	"fmt"
	"net/http"
	"time"

	"github.com/labcolab/colab/lib/handlers/request_handler"
)

// /date/now --> now
// /date/foo --> foo

//need to make it so that /date/* to go to one function --> need to condense subURLs!
func Date(w http.ResponseWriter, r *http.Request) {

	rh := request_handler.New(r)

	rh.Handle("GET", "/date/foo", func() {
		fmt.Fprintf(w, "foo!")
	})

	rh.Handle("GET", "/date/bar", func() {
		fmt.Fprintf(w, "bar!")
	})

	rh.Handle("GET", "/currentDate", func() {
		currentTime := time.Now().Format(time.RFC850)
		fmt.Fprintf(w, currentTime)
	})

	rh.Handle("GET", "/api/date", func() {
		currentTime := time.Now().Format(time.RFC850)
		fmt.Fprintf(w, currentTime)
	})

	rh.Handle("GET", "/api/date", func() {
		fmt.Fprintf(w, "Duplicate - Should not be printed")
	})
}
