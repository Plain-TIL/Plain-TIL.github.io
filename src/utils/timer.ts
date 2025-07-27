export function Timer(func: Function) {
  setTimeout(() => {
    func()
  }, 1000 * 60) // 1분마다 데이터 새로고침
}