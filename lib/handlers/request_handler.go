package handlers

import "net/http"

func checkMethod(method string, request *http.Request) bool {
	return request.Method == method
}

func checkPath(path string, request *http.Request) bool {
	// TODO: Handle arguments
	return path == request.URL.Path
}

type requestCallback func()

func HandleRequest(method string, path string, request *http.Request, callback requestCallback) {
	if !checkMethod(method, request) {
		return
	}
	if !checkPath(path, request) {
		return
	}

	// TODO: Maybe directly use the writer here?
	callback()
}
