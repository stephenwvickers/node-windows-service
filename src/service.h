#ifndef SERVICE_H
#define SERVICE_H

#include <node.h>

using namespace v8;

namespace service {

static void Init (Handle<Object> target);

static Handle<Value> Add (const Arguments& args);
static Handle<Value> IsStopRequested (const Arguments& args);
static Handle<Value> Remove (const Arguments& args);
static Handle<Value> Run (const Arguments& args);
static Handle<Value> Stop (const Arguments& args);

}; /* namespace service */

#endif /* SERVICE_H */
