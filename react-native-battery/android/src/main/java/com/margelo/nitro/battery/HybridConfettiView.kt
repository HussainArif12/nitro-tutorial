package com.margelo.nitro.battery

import com.facebook.react.uimanager.ThemedReactContext
import android.view.View
import nl.dionsegijn.konfetti.core.Party
import nl.dionsegijn.konfetti.core.Position
import nl.dionsegijn.konfetti.core.emitter.Emitter
import nl.dionsegijn.konfetti.xml.KonfettiView
import java.util.concurrent.TimeUnit

class HybridConfettiView(val context: ThemedReactContext): HybridConfettiViewSpec() {
    override var duration: Double = 3000.0
    private val konfettiView = KonfettiView(context)
    override val view: View = konfettiView
    
    override fun showConfetti() {
        val party = Party(
            speed = 0f,
            maxSpeed = 30f,
            damping = 0.9f,
            spread = 360,
            colors = listOf(0xfce18a, 0xff726d, 0xf4306d, 0xb48def),
            position = Position.Relative(0.5, 0.3),
            emitter = Emitter(duration.toLong(), TimeUnit.MILLISECONDS).max(100)
        )
        konfettiView.start(party)
    }
}