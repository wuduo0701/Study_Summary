### 浏览器跨域问题

- 同源策略  -> 同源指的是协议，域名，端口相同
  是一个安全策略，
  在没有授权下，只能本域名下接口交互。

Cookie ， LocalStorage， IndexedDB
有三个标签允许跨域
<img src="">  <link href=""> <script src="">

- JSONP

<!-- 利用<script>标签没有跨域限制的漏洞，网页可以得到从其他老远动态产生的JSON数据。-->
JOSNP和AJAX相同，都是客户端向服务器发送数据，服务端请求数据。AJAX是同源的，JSONP是非同源的，即跨域请求。

优点：JSONP可以解决浏览器的跨域问题，
缺点：只支持GET方法，不安全。

