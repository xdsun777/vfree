mod rsapi;

use wasm_bindgen::prelude::*;
use crate::rsapi::utils::{rs_log, LogValue};

#[wasm_bindgen(start)]
fn run(){
    rs_log(LogValue::Str("初始化运行脚本".to_string()));
}
