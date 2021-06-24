interface CodeSender {
  sendCode(code: string, destination: string): void
}