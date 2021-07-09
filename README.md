# The-Web-Developer-Bootcamp-2021
https://www.udemy.com/course/the-web-developer-bootcamp/  
udemy 웹개발 강의 흡수  


## **HTML**
   * HTML 엘리먼트 문서 : https://developer.mozilla.org/en-US/docs/Web/HTML/Element
   * The HTML Specification : https://html.spec.whatwg.org/
   * Block vs. Inline Elements - DIvs and Spans
     * div : 블럭
     * span : 인라인
   * An Odd Assortment of Elements: HR,BR, Sup, & Sub
     * HR : 수평선 / BR : 개행 / Sup, Sub : 윗 첨자, 아랫 첨자
   * Entity Codes : https://dev.w3.org/html5/html-author/charref
     * 브라우저에서 렌더링 하는 특수문자 코드
   * Playing With Semantic Elements
     * 내포된 의미를 가지고 있는 DIV들 ; header, footer, airticle, section, ...
   * VSCode Tip: Emmet : https://docs.emmet.io/abbreviations/syntax/
     * HTML 코드 간단 자동완성
   * Tables: TR, TD, TH, Thead, Tbody, Tfoot, Colspan, Rowspan
     * TR / TD / TH : 행 / 셀 / 제목행
     * Thead, Tbody, Tfoot : 테이블 내 head, body, foot 영역 표시 semantic
     * Colspan, Rowspan : 열 병합, 행 병합
   * form : "represents a document section containing interactive controls for submitting information"
     * A shell or container that doesn't have any visual impact.
     * Contains a collection of inputs, checkboxes, buttons, etc.
   * Common Input Types : Type에 따라 Input 의 형태가 다름. text, password, color, ...
   * The All-Important Label : 요소에 label 을 붙임. 클릭시 label이 가리키는 요소를 클릭한 효과를 가짐
   * HTML Buttons : form 태그 내부에서 type 미지정시 submit 타입을 디폴트로 가짐. input 태그의 submit 타입도 동일하게 동작
   * The Name Attribute : form 태그 내부에서 submit 시 요소에 입력한 값이 "지정한name=값" 의 형태로 전달됨
   * "Hijacking" Google & Reddit's Search : form 태그의 action에 해당 서비스에서 제공하는 검색페이지 경로 지정하여 검색호출
   * Radio Buttons, Checkboxes, & Selects
     * Ratio Buttons : input type="radio". name 속성으로 그루핑하고 선택된 항목의 value값 전송.
     * Checkbox : input type="checkbox". 체크되면 "명명된 name"=on 과 같은 형태로 전송됨. 선택 세팅 : checked 키워드
     * Select : select 태그를 사용하고 내부에 option 들을 가짐. "명명된 name"="선택된 value" 와 같은 형태로 전송됨. 선택 세팅 : selected 키워드
   * Range & Text Area
     * Range : 숫자 범위내에서 값 선택. min, max, step 값 지정가능
     * Text Area : 텍스트 입력 영역. cols, rows로 영역 사이즈 세팅가능. placeholder 사용가능
   * HTML5 Form Validations : https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation 참조

## **CSS**
   * MDN CSS Property Reference : https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
   * Including Styles Correctly : HTML 내에서 link 태그로 css 파일 include
   * Colors Systems: RGB & Named Colors
     * RGB : rgb(0 ~ 255, 0 ~ 255, 0 ~ 255) 형태로 색 표현
     * Named Colors : red, green, blue, pink, ...
     * 참고) https://htmlcolorcodes.com/color-names/, https://htmlcolorcodes.com/color-picker/
   * Colors Systems: Hexadecimal : 16진수 6자리로 색 표현. 예) #2DBFBC
   * Common Text Properties
     * text-align
     * text-decoration
     * font-weight
     * letter-spacing
     * line-height
   * Font Size Basics With Pixels
   * The Font Family Property
     * 참고) https://www.cssfontstack.com/
   * Universal & Element Selectors : 예) *, button, "h1,h2", ...
   * The ID Selector : Selector 를 ID로 지정. 예) #id
     * 참고) (색상 팔레트) https://coolors.co/palettes/trending
