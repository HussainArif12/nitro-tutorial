package com.margelo.nitro.battery

import com.margelo.nitro.NitroModules
import android.os.BatteryManager
import android.content.Context

class HybridBattery: HybridBatterySpec() {
    private val context = NitroModules.applicationContext ?: throw Error("No context available")

    override fun getBattery(): Double {
        val bm = context.getSystemService(Context.BATTERY_SERVICE) as BatteryManager
       
        val batLevel:Int = bm.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
        return batLevel.toDouble()
    }
}