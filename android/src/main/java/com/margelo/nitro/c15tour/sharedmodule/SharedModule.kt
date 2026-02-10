package com.margelo.nitro.c15tour.sharedmodule
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class SharedModule : HybridSharedModuleSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
