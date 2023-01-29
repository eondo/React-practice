![image](https://user-images.githubusercontent.com/109258497/215350563-c6c05c42-1bd7-470f-b66d-33f1668ded4a.png)

2. 배열에 spread 연산자랑 concat으로 리스트 배열 추가해주려고 했는데 적용 안되는 문제
  ![image](https://user-images.githubusercontent.com/109258497/215353128-0380fb2c-bcc4-4084-b0ca-70e68e7d15e3.png)
[ setState() 호출 후 상태가 바로 업데이트 되지 않는 이슈 ] 연속적으로 setState를 호출할 때
- setState() 호출은 비동기적으로 이뤄진다.

3. 그래서 그냥 push로 하고 props로 전달해줬는데... 안 됨