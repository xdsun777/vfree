// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use sysinfo::{System, SystemExt};

#[tauri::command]
fn test()->String{
  "test测试后端代码".to_string()
}

#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}!", name)
}

#[tauri::command]
fn get_system_info() -> String {
  let mut sys = System::new_all();
  sys.refresh_all();
  let cpu_count = sys.cpus().len();
  let total_memory = sys.total_memory();
  let used_memory = sys.used_memory();
  let free_memory = sys.free_memory();
  
  format!(
    "CPU Count: {}, Total Memory: {} MB, Used Memory: {} MB, Free Memory: {} MB",
    cpu_count, total_memory, used_memory, free_memory
  )
}


fn main() {
  // vfree_lib::run();
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![test,greet,get_system_info])
      .run(tauri::generate_context!())
      .expect("错误运行app");
}
