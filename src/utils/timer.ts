export function Timer(func: Function) {
  setTimeout(() => {
    func()
  }, 1000 * 60 * 60) // 1시간마다 데이터 새로고침
}