package date

import (
	"fmt"
	"net/http"

	"github.com/labcolab/colab/lib/handlers"
	"github.com/labcolab/colab/lib/three"
)

// /date/now --> now
// /date/foo --> foo

//need to make it so that /date/* to go to one function --> need to condense subURLs!
func Date(w http.ResponseWriter, r *http.Request) {
	//todo switch
	if r.URL.Path == "/date/foo" {
		fmt.Fprintf(w, "foo!")
	} else if r.URL.Path == "/date/bar" {
		fmt.Fprintf(w, "bar!")
	} else {
		fmt.Fprintf(w, r.URL.Path)
	}

	fmt.Fprintf(w, "\n")
	fmt.Fprintf(w, "%d", handlers.Two())

	fmt.Fprintf(w, three.Three())

	// two.Two()

	// currentTime := time.Now().Format(time.RFC850)
	// fmt.Fprintf(w, currentTime)
}
