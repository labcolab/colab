package date

import (
	"fmt"
	"net/http"
	"time"

	rh "github.com/labcolab/colab/lib/handlers"
)

// /date/now --> now
// /date/foo --> foo

//need to make it so that /date/* to go to one function --> need to condense subURLs!
func Date(w http.ResponseWriter, r *http.Request) {
	rh.HandleRequest("GET", "/date/foo", r, func() {
		fmt.Fprintf(w, "foo!")
	})

	rh.HandleRequest("GET", "/date/bar", r, func() {
		fmt.Fprintf(w, "bar!")
	})

	rh.HandleRequest("GET", "/currentDate", r, func() {
		currentTime := time.Now().Format(time.RFC850)
		fmt.Fprintf(w, currentTime)
	})

	rh.HandleRequest("GET", "/api/date", r, func() {
		currentTime := time.Now().Format(time.RFC850)
		fmt.Fprintf(w, currentTime)
	})
}
