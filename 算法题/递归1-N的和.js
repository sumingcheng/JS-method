function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

// 示例
console.log(sum(10)); // 输出 55，即 1+2+3+4+5+6+7+8+9+10 的和
