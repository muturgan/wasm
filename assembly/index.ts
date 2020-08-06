// The entry file of your WebAssembly module.

export function wasmCalculateAdultAndChildBaseFareForBooking(totalFare: f32, infPrice: f32, adtCount: u8, cnnCount: u8, infCount: u8): f32 {
  return ((totalFare - infPrice * infCount) / (adtCount + cnnCount));
}
