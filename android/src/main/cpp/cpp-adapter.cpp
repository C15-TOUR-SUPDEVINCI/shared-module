#include <jni.h>
#include "c15tour_sharedmoduleOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::c15tour_sharedmodule::initialize(vm);
}
