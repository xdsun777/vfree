mod rsapi;

use wasm_bindgen::prelude::*;
use crate::rsapi::utils::{rs_log, LogValue};

#[wasm_bindgen(start)]
pub fn run(){
    rs_log(LogValue::Str("WASM初始化运行脚本".to_string()));
}
