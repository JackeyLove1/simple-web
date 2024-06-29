/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XtxSwiper from "@/components/XtxSwiper.vue";
import XtxGuess from "@/components/XtxGuess.vue";
import XtxCard from "@/components/XtxCard.vue";

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
    XtxCard: typeof XtxCard
  }
}

export type XtxSwiperInstance = InstanceType<typeof XtxSwiper>
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
export type XtxCardInstance = InstanceType<typeof XtxCard>
