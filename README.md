# todoit

todolist로 하고싶은거 다해보기

## 목표

todolist로 해볼 수 있는건 다해보기

## 프로젝트 예상 기간

: 7.16~ 8.13 (4주)

### 220716

- 프로젝트 시작
- CI 설정
- 프로젝트 구조 설정 (tree)
- JSON server 연결

### 220717

- 기본적인 마크업 완료
- emotion style 적용 시작
- VAC pattern 적용
- `<TodoItem/>` 컴포넌트 내 mouseon 상태 관리
- `<MainPage/>` 컴포넌트 내 visibleTodoCreate 상태 관리
- 다음주에 해볼 것 : 메모리 내 데이터 관리 -> api 연결 -> 리코일 적용 예정

### 220724
- AxiosTodoService 에서 api 구현
- delete, isDone 기능 구현
    - API 호출과 렌더링 작업 분리
- dayjs 활용 header 기능 구현
- `<Text/>` `<IconBtn>` 컴포넌트 재사용 가능하도록 분리
