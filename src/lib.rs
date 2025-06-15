mod rsapi;

use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn add(left: i32, right: i32) -> i32 {
    left + right
}

#[wasm_bindgen(start)]
fn run() {
    rsapi::utils::rs_log(rsapi::utils::LogValue::Str("Hello from Rust!".to_string()));
}