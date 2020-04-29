import React, { Component } from "react";
import Header from "../_layout/header/index.jsx";
import "../../../scss/react/client/page/home.scss";
import ServiceWebsiteSelector from "../_layout/partial/service-web-selector.jsx";

import $ from "jquery";

import checkInViewPosition from "../../../library/check-in-view-position.js"


class Home extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    var $animation_elements = $(".animate-support");
    $( window ).scroll(function() {
      checkInViewPosition($, $animation_elements)
    });
  }

  render() {
    return (
      <div className="component-home">
        <Header />
        <ServiceWebsiteSelector />
        <div>
          Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng
          làm việc ở tất cả các giai đoạn của quy trình phát triển phần mềm từ
          phân tích hệ thống đến xây dựng website font-end lẫn back-end @include
          ("genneral.svg.java") Servlet, Java core, C#, Redit JAVA & C# Sử dụng
          Java, C#,... để built các web chuyên biệt hơn
        </div>
        <div>
          Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng
          làm việc ở tất cả các giai đoạn của quy trình phát triển phần mềm từ
          phân tích hệ thống đến xây dựng website font-end lẫn back-end @include
          ("genneral.svg.java") Servlet, Java core, C#, Redit JAVA & C# Sử dụng
          Java, C#,... để built các web chuyên biệt hơn
        </div>
        <div>
          Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng
          làm việc ở tất cả các giai đoạn của quy trình phát triển phần mềm từ
          phân tích hệ thống đến xây dựng website font-end lẫn back-end @include
          ("genneral.svg.java") Servlet, Java core, C#, Redit JAVA & C# Sử dụng
          Java, C#,... để built các web chuyên biệt hơn
        </div>
        <div>
          Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng
          làm việc ở tất cả các giai đoạn của quy trình phát triển phần mềm từ
          phân tích hệ thống đến xây dựng website font-end lẫn back-end @include
          ("genneral.svg.java") Servlet, Java core, C#, Redit JAVA & C# Sử dụng
          Java, C#,... để built các web chuyên biệt hơn
        </div>
        <div>
          Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng
          làm việc ở tất cả các giai đoạn của quy trình phát triển phần mềm từ
          phân tích hệ thống đến xây dựng website font-end lẫn back-end @include
          ("genneral.svg.java") Servlet, Java core, C#, Redit JAVA & C# Sử dụng
          Java, C#,... để built các web chuyên biệt hơn
        </div>
        <div>
          Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng
          làm việc ở tất cả các giai đoạn của quy trình phát triển phần mềm từ
          phân tích hệ thống đến xây dựng website font-end lẫn back-end @include
          ("genneral.svg.java") Servlet, Java core, C#, Redit JAVA & C# Sử dụng
          Java, C#,... để built các web chuyên biệt hơn
        </div>
        <div>
          Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng
          làm việc ở tất cả các giai đoạn của quy trình phát triển phần mềm từ
          phân tích hệ thống đến xây dựng website font-end lẫn back-end @include
          ("genneral.svg.java") Servlet, Java core, C#, Redit JAVA & C# Sử dụng
          Java, C#,... để built các web chuyên biệt hơn
        </div>
        <div>
          Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng
          làm việc ở tất cả các giai đoạn của quy trình phát triển phần mềm từ
          phân tích hệ thống đến xây dựng website font-end lẫn back-end @include
          ("genneral.svg.java") Servlet, Java core, C#, Redit JAVA & C# Sử dụng
          Java, C#,... để built các web chuyên biệt hơn
        </div>
      </div>
    );
  }
}

export default Home;
