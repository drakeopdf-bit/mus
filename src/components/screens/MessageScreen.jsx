"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

export default function MessageScreen() {
    const [showOverlay, setShowOverlay] = useState(false)

    const romanticMessage = `My Dearest Pyaari si chudel 🐥,

🌸 Happy 4th Anniversary My Love 🌸

Babu, aaj hum dono ka 4th anniversary hai aur main itna khush hoon ki words kam pad rahe hain. Tu meri life mein itni unexpected tareeke se aayi aur ekdum se meri zindagi ka sabse important hissa ban gayi. Chudel, tujhe andaza bhi nahi hai ki tu mere liye kya hai. ❤️

Babu, maine tujhe pehle bhi bola tha aur aaj bhi bol raha hoon — you are my kind of luck. Jab tu mere saath hai, mujhe life mein kisi aur luck ki zarurat hi nahi padti. You are that kind of luck who can turn stones even in the darkest of times, jahan har moment dangerous ho sakta hai.

Chaar mahine ho gaye tere pyaare-pyaare gusse ko dekhte-dekhte, tera "pyaar Jayda na dikane” ki acting ko dekhte-dekhte 😄 … but I know from inside how much you love me, meri chudel si.

Babu, teri woh aadat – har risk le kar video call karna, chahe kitna bhi risk ho, chahe tera mood kitna bhi kharab ho, gussa karke bhi end mein mujhe sab kuch text karke bata dena – yeh sab cheeze mujhe bahut pasand hai. Tu face to face pyaar express nahi kar paati, par text mein jo tera pyaar hota hai na, woh alag hi hai. Hehe 😍 or gussa bi bhyiiii..

I love all your habits mera babu – jaise tu video call pe alag baate karti hai, call pe alag aur text pe alag-alag tone mein baate karti hai. College mein alag tone, ghar mein alag tone… babu, tera mood kaisa hai, mujhe teri awaaz se hi pata chal jata hai, chahe tu kitna bhi chhupaye.

Aur haan, kaise bhool sakta hoon main tera bichchu ki tarah katna 😅 aur teri chhoti si zubaan itti si, itti si zuban jo maine measure ki hai apni zubaan se kitni chlti h bhyii voooo........... trrrrrrrrrrrrrrr trrrrrrrrrrrrrrrrr trrrrrrrrrrrrrrrrr...... but mera bby tu bolta he , hasata khelta he, achha lagta h merko. Main tujhe aise hi dekhna chahta hoon meri chudel sari zindagi, chahe tujhe khush karne ke liye mujhe kuch bhi karna pade.

Aur tu bol rahi thi na “itna efforts mat daal” – babu ek baat bataun: I believe in “You will get, who you are.” Samjha? Everything will return back. Yeh efforts tujhe lagte honge, mujhe nahi… dekhna ek din sab kuch wapas mere paas aayega. Jo maine sabko diya hai, woh sab cheeze wapas aayengi mere paas. Aur shayad tu bhi un karmon ka fal hai, jo mujhe is generation mein teri jaisi ladki,  mera pyaara sa baccha… aur aage bhi milega, meri babu ke jariye… hai na?

All I want from you, babu, is your loyalty. Never ever, even by mistake, do such things that break my heart, my dear… because then it never be the same, whether we try thousands of times. ❤️ or bakki sab me dekh he lunga mera bby, meri chudel, tu kisi cheez ki chinta naa kia kr, kisi bi cheez ki.... " Me Hu Naa" yaad rakhio bss.....

I love you soooo sooooo much, chudel.
Happy Anniversary Again. 🌹

With all my love and devotion,
Your Forever Mohit 💕`

    const handleCardClick = () => {
        setShowOverlay(true)
    }

    const closeOverlay = () => {
        setShowOverlay(false)
    }

    return (
        <ScreenContainer>
            <div className="w-full max-w-4xl mx-auto text-center relative">
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 text-balance leading-tight"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                        A Special Message For You Babu 🥹
                    </motion.h1>
                </motion.div>

                <motion.div
                    className="relative group mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        onClick={handleCardClick}
                        className="w-80 h-48 mx-auto bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-pink-800/40 backdrop-blur-lg rounded-2xl border-2 border-pink-400/50 shadow-2xl relative overflow-hidden cursor-pointer">
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="flex flex-col items-center justify-center h-full p-6">
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                                💌
                            </motion.div>

                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                For You, My Cutiepiee
                            </h3>

                            <p className="text-purple-300 text-sm">Click to read my Dil Ki Baat💝</p>
                        </div>
                    </motion.div>
                </motion.div>

                <AnimatePresence>
                    {showOverlay && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .5 }}
                            exit={{ opacity: 0 }}
                            onClick={closeOverlay}
                        >
                            <motion.div
                                className="w-full max-w-2xl bg-gradient-to-b from-purple-950/50 via-black/90 to-pink-950/50 rounded-2xl shadow-2xl border-2 border-pink-400/40 p-8 relative"
                                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeOverlay}
                                    className="absolute top-4 right-4 text-pink-400 hover:text-pink-300 text-2xl"
                                >
                                    ×
                                </button>

                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                        Happy 4th Anniversary!
                                    </h3>
                                    <p className="text-purple-300">This is just for you ♥</p>
                                </div>

                                <div
                                    className="h-80 overflow-y-auto pr-4 mb-6"
                                    style={{
                                        scrollbarWidth: "thin",
                                        scrollbarColor: "rgba(236, 72, 153, 0.5) rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    <div className="text-sm text-pink-100 leading-relaxed text-left whitespace-pre-line">
                                        {romanticMessage}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ScreenContainer>
    )
}

