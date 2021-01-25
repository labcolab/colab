package requesthandler

import "net/http"

type requestCallback func()
type methodCall func(path string, callback requestCallback)

type RequestHandler struct {
	Request         *http.Request
	RequestComplete bool
	Get             methodCall
	Post            methodCall
	Put             methodCall
	Delete          methodCall
	Patch           methodCall
}

func checkMethod(method string, request *http.Request) bool {
	return request.Method == method
}

func checkPath(path string, request *http.Request) bool {
	// TODO: Handle arguments like /user/:id
	return path == request.URL.Path
}

func handleRequest(path string, rh *RequestHandler, callback requestCallback) {

	if !rh.RequestComplete {

		request := rh.Request

		if !checkPath(path, request) {
			return
		}

		switch request.Method {
		case "POST", "PATCH", "PUT":
			request.ParseForm()
		}

		callback()

		rh.RequestComplete = true
	}

}

func createMethodClosure(rh *RequestHandler, method string) methodCall {
	return func(path string, callback requestCallback) {
		if checkMethod(method, rh.Request) {
			handleRequest(path, rh, callback)
		}
	}
}

func New(request *http.Request) *RequestHandler {
	rh := RequestHandler{Request: request, RequestComplete: false}
	rh.Get = createMethodClosure(&rh, "GET")
	rh.Post = createMethodClosure(&rh, "POST")
	rh.Put = createMethodClosure(&rh, "PUT")
	rh.Patch = createMethodClosure(&rh, "PATCH")
	rh.Delete = createMethodClosure(&rh, "DELETE")
	return &rh
}
