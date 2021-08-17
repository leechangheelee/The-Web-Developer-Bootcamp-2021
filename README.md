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
   * The Class Selector : Selector 를 CLASS로 지정. 예) .class
   * The Descendent Selector : " " 로 특정 엘리먼트의 하위항목 지정. 예) "footer a", ".post a"
   * The Adjacent & Direct-Descendent Selectors
     * Adjacent Selectors : 동등한 레벨의 엘리먼트들을 묶어서 지정. 예) h2 + button
     * Direct-Descendent Selectors : 특정 엘리먼트의 한 단계 아래 엘리먼트 지정. 예) footer > a
   * The Attribute Selector : 속성값을 통해 엘리먼트 지정. 예) input[type="password"]
   * Pseudo Classes : keyword added to a selector that specifies a special state of the selected element(s). 예) a:hover
   * Pseudo Elements : Keyworkd added to a selector that lets you style a particular part of selected element(s). 예) p::fitst-line
   * The CSS Cascade : 동일한 엘리먼트에 동일한 속성에 대한 값을 서로 다른 두 곳에서 정의하는 경우, 가장 마지막에 설정된 값이 적용됨.
   * Specificity : How the browser decides which rules to apply when multiple rules could apply to the same element.
     * 참고) https://specificity.keegan.st/ (Specificty 계산기)
   * Inline Styles & Important : 미사용 권고
     * Inline Styles : html 태그 안에 style 삽입. 예) < button id="signup" style="color:coral" >
     * Important : specificty를 강제로 최고로 만듦. 예) background-color: magenta !important;
   * CSS Inheritance : 상위항목에 설정된 값이 하위항목에도 적용됨. 예) body 항목에 적용한 color 가 아래 h1 에도 적용됨.
     * 일부는 상속값 사용을 명시해야 함. 예) color: inherit;
   * Box Model: Width & Height
     * 엘리먼트는 하나의 박스 형태로 다뤄지고 width와 height는 content 영역의 폭과 높이를 설정. 예) width: 200px;
   * Box Model: Border & Border-Radius
     * content를 감싸고 있는 영역(:경계선)의 색상, 선 스타일, 굵기, 모서리의 둥글기를 설정. 예) border: 4px solid black; border-radius: 50%;
   * Box Model: Padding
     * border와 content영역 사이의 영역. 예) padding: 10px 20px 30px 40px;
   * Box Model: Margin
     * border를 포함한 content들 사이의 영역. 예) margin-left: 30px;
   * The Display Property
     * INLINE : Width & Height are ignored. Margin & padding push elements away horizontally but not vertically.
     * BLOCK : Block elements break the flow of a document. Width, Height, Margin, & Padding are respected.
     * INLINE-BLOCK : Behaved like an inline element except Width, Height, Margin, & Padding are respected.
   * CSS Units Revisited
     * Absolute Units
       * PX - BY FAR THE MOST COMMONLY USED ABSOLUTE UNIT
     * Relative Units
       * PERCENTAGES ARE ALWAYS RELATIVE TO SOME OTHER VALUE
       * EM'S ARE RELATIVE UNITS
         * With font-size, 1 em equals the font-size of the parent. 2em's is twice the font-size of the parent, etc.
         * With other properties, 1em is equal to the computed font-size of the element itself.
       * rem (ROOT EMS)
         * Relative to the root html element's font-size. Often easier to work with.
         * If the root font-size is 20px, 1 rem is always 20px, 2rem is always 40px, etc.
   * Opacity & The Alpha Channel
     * Opacity : 엘리먼트들 전체에 적용되는 투명도 (0 ~ 1). 예) opacity: 0.3;
     * Alpha Channel : rgb에 투명도 (0 ~ 1) 가 추가된 것. 지정한 엘리먼트에만 먹힘. 예) background-color: rgba(255,255,255,0.7); → background-color 에만 먹힘.
   * The Position Property : sets how an element is positioned in a document. 참조) https://developer.mozilla.org/en-US/docs/Web/CSS/position
     * static : The element is positioned according to the normal flow of the document.
     * relative : The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left.
     * absolute : The element is removed form the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.
     * fixed : The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial containing block established by the viewport, except when one of its ancestors has a transform, perspective, or filter property set to something other than none, in which case that ancestor behaves as the containing block.
     * sticky : The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements. → 스크롤 내리면 따라붙음
   * CSS Transitions : Transitions enable you to define the transition between two states of an element. Different states may be defined using pseudo-class like :hover or :active or dynamically set using JavaScript.
     * Transition : PROPERTY NAME | DURATION | TIMING FUNCTION | DELAY
     * 예) transition: background-color 1s ease-in, border-radius 2s; transition-timing-function: cubic-bezier(0.7, 0, 0.84, 0);
   * The Power of CSS Transforms : The transform CSS property lets you rotate, scale, skew, or translate an element.
     * 예) transform: translateX(-500px) rotate(0.5turn) scaleY(1.5);
   * The truth About Background : The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
     * 예) background : center/cover no-repeat url("https://images.unsplash.com/photo-1628362152245-57e1eb389bd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
   * Google Fonts is Amazing : https://fonts.google.com/
   * What on Earth is Flexbox?
     * Flexbox is a one-dimensional layout method for laying out items in rows or columns
     * Flexbox is a recent addition to CSS, included to address common layout frustations
     * Flexbox allows us to distribute space dynamically across elements of an unknown size, hence the term "flex"
   * Flex-Direction : The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction
     * 예) flex-direction: row; flex-direction: row-reverse; flex-direction: column; flex-direction: column-reverse;
   * Justify-Content : The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
     * 예) flex-content: start; flex-content: center; flex-content: space-between; flex-content: space-around; flex-content: space-evenly;
   * Flex-Wrap : The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
     * 예) flex-wrap: nowrap; flex-wrap: wrap; flex-wrap: wrap-reverse;
