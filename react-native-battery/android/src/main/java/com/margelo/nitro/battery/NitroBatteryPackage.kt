package com.margelo.nitro.battery

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.BaseReactPackage
import com.margelo.nitro.battery.views.HybridConfettiViewManager
import com.facebook.react.uimanager.ViewManager
import android.view.View

class NitroBatteryPackage : BaseReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? = null

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider = ReactModuleInfoProvider { HashMap() }

    companion object {
        init {
            NitroBatteryOnLoad.initializeNative()
        }
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(HybridConfettiViewManager() as ViewManager<View, *>)
  } 
}
