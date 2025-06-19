// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn test()->String{
  "test测试后端代码".to_string()
}

#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}!", name)
}

fn main() {
  // vfree_lib::run();
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![test,greet])
      .run(tauri::generate_context!())
      .expect("错误运行app");
}
