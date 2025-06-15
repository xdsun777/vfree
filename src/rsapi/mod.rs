pub mod utils {
    use wasm_bindgen::prelude::wasm_bindgen;
    #[wasm_bindgen]
    extern "C" {
        #[wasm_bindgen(js_namespace = console)]
        fn log(s: &str);
        #[wasm_bindgen(js_namespace = console, js_name = log)]
        fn log_u32(a: u32);
        #[wasm_bindgen(js_namespace = console, js_name = log)]
        fn log_many(a: &str, b: &str);
    }

    macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

    #[allow(dead_code)]
    pub enum LogValue {
        Str(String),
        Int(i32),
        Float(f32),
    }

    pub fn rs_log(value: LogValue) {
        match value {
            LogValue::Str(s) => console_log!("rs_log: {}", s),
            LogValue::Int(i) => console_log!("rs_log: {}", i),
            LogValue::Float(f) => console_log!("rs_log: {}", f),
        }
    }
}
