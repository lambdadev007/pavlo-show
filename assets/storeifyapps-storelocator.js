var search_result_zoom = 2 ;var limit_store = 10000;var list_mode = 0;var search_mode = 0;var url_app="//pavlo-show.myshopify.com/a/store-locator"; var html_list_render = "IjxkaXYgY2xhc3M9XCJpdGVtIHRodW1ibmFpbFwiIGRhdGFtYXJrZXI9XCIwXCI+PGRpdiBjbGFzcz1cImlubmVyLWl0ZW1cIiBpZD1cInN0b3JlX2lkXzk5MDc1MVwiPjxkaXYgY2xhc3M9XCJpdGVtLXRodW1iXCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBhbGlnbi1taWRkbGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDhweDtcIj5waW5fZHJvcDxcL3NwYW4+PFwvZGl2PjxkaXYgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIj48bGFiZWwgY2xhc3M9XCJzdG9yZS1uYW1lXCI+PHN0cm9uZz5FcmljIFRvZGV5PFwvc3Ryb25nPjxcL2xhYmVsPjxkaXYgY2xhc3M9XCJhZGRyZXNzXCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPnBsYWNlPFwvc3Bhbj48YSBocmVmPVwiaHR0cHM6XC9cL21hcHMuZ29vZ2xlLmNvbVwvP2RhZGRyPTEyMywgQ2hlc3RlcmZpZWxkLCBDaGVzdGVyZmllbGQsIFM0MCAxUkYsIFJ1c3NpYVwiIHRhcmdldD1cIl9ibGFua1wiPjEyMywgQ2hlc3RlcmZpZWxkLCBDaGVzdGVyZmllbGQsIFM0MCAxUkYsIFJ1c3NpYTxcL2E+PFwvZGl2PjxkaXYgY2xhc3M9XCJpdGVtLWVudmVsb3BlXCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPmVtYWlsPFwvc3Bhbj48YSBocmVmPVwibWFpbHRvOnBvYmVyZXpoZXRzcGF2bG8rKysrKytAZ21haWwuY29tXCIgY2xhc3M9XCJwaG9uZS1lbWFpbFwiPnBvYmVyZXpoZXRzcGF2bG8rKysrKytAZ21haWwuY29tPFwvYT48YnJcLz48XC9kaXY+PGEgY2xhc3M9XCJsaW5rZGV0YWlsc3RvcmVcIiBocmVmPVwiXC9hXC9zdG9yZS1sb2NhdG9yXC9lcmljLXRvZGV5Lmh0bWxcIj5WaWV3IERldGFpbHMgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPnRyZW5kaW5nX2ZsYXQ8XC9zcGFuPjxcL2E+PGEgY2xhc3M9XCJnZXRkaXJlY3Rpb25zdG9yZVwiIGhyZWY9XCJodHRwczpcL1wvbWFwcy5nb29nbGUuY29tXC8/ZGFkZHI9MTIzLCBDaGVzdGVyZmllbGQsIENoZXN0ZXJmaWVsZCwgUzQwIDFSRiwgUnVzc2lhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGlyZWN0aW9ucyA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+dHJlbmRpbmdfZmxhdDxcL3NwYW4+PFwvYT48XC9kaXY+PFwvZGl2PjxcL2Rpdj48XC9kaXY+Ig==";var tags_render = "IiI=";var products_render = "IiI=";var map_style_render = "W10=";var html_render = "PGRpdiBjbGFzcz0iYm9vdHN0cmFwLXN0b3JlaWZ5YXBwcyBzdG9yZWlmeWFwcHMtc3RvcmVsb2NhdG9yLWxheW91dC0xIHN0b3JlaWZ5YXBwcy1zdG9yZWxvY2F0b3Itc2hvcnRjb2RlIj4NCgkJDQoJPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIGRlZmVyPSJkZWZlciI+DQoJCXZhciBsYXlvdXQgPSAyOw0KCQl2YXIgb3dsX2NsYXNzPSJmdWxsLXdpZHRoIjsNCgkJdmFyIGNlbnRlcl9sYXQgPSAnMCc7Ly8nLTEyMi43NDgzNTYnOw0KCQl2YXIgY2VudGVyX2xuZyA9ICcwJzsvLyc0OC45OTQzMjMnOw0KCQl2YXIgaW5pdGlhbF96b29tID0gMjsvLzI7DQoJCXZhciBiYXNldXJsID0gJyc7DQoJCXZhciBzZWFyY2hfcmVzdWx0X3pvb20gPSAyOy8vMjsNCgkJdmFyIHJhZGl1c191bml0ID0gMTsNCgkJdmFyIG1hcDsNCgkJdmFyIG1hcmtlcnMgPSBbXTsNCgkJdmFyIGluZm9XaW5kb3c7DQoJCXZhciBsb2NhdGlvbkRpdjsNCgkJdmFyIHJhbmRvbUlEID0gJ21haW4tc2xpZGVyLXN0b3JlbG9jYXRvcic7DQoJCXZhciB0cmFucz0gew0KCQkJCQknbGlua19kZXRhaWwnOiJWaWV3IERldGFpbHMiLA0KCQkJCQknZ2V0ZGlyZWN0aW9uJzoiRGlyZWN0aW9ucyIsDQoJCQkJCSdlbWFpbCc6IkVtYWlsIiwNCgkJCQkJJ3Bob25lJzoiUGhvbmUgTnVtYmVyIiwNCgkJCQkJJ3Bob25lX25vJzoiUGhvbmUgTm8iLA0KCQkJCQknYWRkcmVzcyc6IkFkZHJlc3MiLA0KCQkJCQknc3RvcmVfbmVhcic6IlRoZXJlIGlzIG5vIHN0b3JlIG5lYXIgd2l0aCAiLA0KCQkJCQknYWRkcmVzc19udWxsJzoiIGlzIG5vdCBmb3VuZCIsDQoJCQkJCSdub19yZXN1bHQnOiJObyByZXN1bHRzIGZvdW5kIiwNCgkJCQkJJ2dlb2NvZGVyX2ZhaWxlZCc6Ikdlb2NvZGVyIGZhaWxlZCBkdWUgdG86ICIsDQoJCQkJCSdwbGVhc2VfZW50ZXInOiJQbGVhc2UgZW50ZXIgYSBsb2NhdGlvbi4iLA0KCQkJCQknbm9fc3RvcmUnOiJUaGVyZSBpcyBubyBzdG9yZSIsDQoJCQkJCSdub19zdG9yZV9wcm9kdWN0Jzoibm9fc3RvcmVfcHJvZHVjdCIsDQoJCQkJCSdub19zdG9yZV9uYW1lJzoibm9fc3RvcmVfbmFtZSJ9Ow0KDQoJCXZhciBpY29uX21hcmtlciA9ICIiOw0KDQoJPC9zY3JpcHQ+DQoJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkJCQlib2R5IC5ib290c3RyYXAtc3RvcmVpZnlhcHBzew0KCQkJbWF4LXdpZHRoOiAxMjAwcHg7DQoJCX0NCgkJCQkJCSNmcm0tc3RvcmVsb2NhdG9yLXNlYXJjaCAjc3VibWl0LXNlYXJjaCwjZnJtLXN0b3JlbG9jYXRvci1zZWFyY2ggI3Jlc2V0LXNlYXJjaHtjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O2JhY2tncm91bmQ6ICNGRkZGRkYgIWltcG9ydGFudDtoZWlnaHQ6IDM2cHg7bGluZS1oZWlnaHQ6IDM2cHg7cGFkZGluZzogMCAxMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0OiBsZWZ0O30NCgkJLmJvb3RzdHJhcC1zdG9yZWlmeWFwcHMgI21haW4tc2xpZGVyLXN0b3JlbG9jYXRvciAuaXRlbS10aHVtYiBpbWd7DQoJCQltYXJnaW4tYm90dG9tOiAxNXB4Ow0KCQkJd2lkdGg6IDEwMCU7DQoJCX0NCgkJLml0ZW0tdGh1bWIgLm1hdGVyaWFsLWljb25zLW91dGxpbmVkew0KCQkJZGlzcGxheTogbm9uZTsNCgkJfQ0KCQkucmFuZ2UtcmFkaXVzIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHsNCgkJICBiYWNrZ3JvdW5kOiAjMzMzMzMzICFpbXBvcnRhbnQ7DQoJCX0NCgkJLnJhbmdlLXJhZGl1cyAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHsNCgkJICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kOiAjMzMzMzMzICFpbXBvcnRhbnQ7DQoJCX0NCgkgICAgLnJlc3VsdHMtc2x0IC50aXRsZXsNCgkgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzMzMzMgIWltcG9ydGFudDsNCgkgICAgICBjb2xvcjojRkZGRkZGICFpbXBvcnRhbnQ7DQoJICAgIH0NCgkgICAgCSAgICAudGFnLWl0ZW17DQoJICAgIAlkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQoJICAgIAlwYWRkaW5nOiAwcHggNHB4IDFweCAycHg7ICANCgkgICAgfQ0KCSAgICAudGFnLWl0ZW0gLmZhew0KCSAgICAJY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDsNCgkgICAgCXBhZGRpbmctcmlnaHQ6IDFweDsNCgkgICAgfQ0KCSAgIAkuc3RvcmVpZnlhcHBzLXN0b3JlbG9jYXRvci1sYXlvdXQtMSAucmVzdWx0cy1zbHQgLnRpdGxlew0KCSAgIAkJbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50Ow0KCSAgIAl9DQoJICAgCS5tYXAtdGFiLW1vYmlsZS1ibnQtaXRlbS5hY3RpdmV7DQoJICAgCQkgYmFja2dyb3VuZC1jb2xvcjojMzMzMzMzICFpbXBvcnRhbnQ7DQoJICAgICAgICAgY29sb3I6I0ZGRkZGRiAhaW1wb3J0YW50Ow0KCSAgIAl9DQoJICAgCS5zdG9yZWxvY2F0b3ItbGF5b3V0LTIgLm1hcC10YWItZ2dtYXAgew0KCQkgICAgcGFkZGluZy1sZWZ0OiAwOw0KCQl9DQoJICAgCUBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCl7DQoJICAgCQkuc3RvcmVsb2NhdG9yLWxheW91dC0yew0KCSAgIAkJCWJvcmRlcjogMDsNCgkgICAJCQlwYWRkaW5nOiAxMHB4Ow0KDQoJICAgCQl9DQoJICAgCQkuc3RvcmVsb2NhdG9yLWxheW91dC0yIC5zdG9yZWlmeS1zdGwtY29sMXsNCgkgICAJCQlwYWRkaW5nOiAwOw0KCSAgIAkJfQ0KCSAgIAkJLmNob3NlLXNlYXJjaC1zbHQuZm9ybS1jb250cm9sLXN0b3JlaWZ5ew0KCSAgIAkJCWRpc3BsYXk6IGJsb2NrOw0KCSAgIAkJCXdpZHRoOiAxMDAlOw0KCSAgIAkJCW1hcmdpbi1ib3R0b206IDEwcHg7DQoJICAgCQl9DQoJICAgCQkuc3RvcmVpZnktc2Vhci1ib3h7DQoJICAgCQkJd2lkdGg6IDEwMCU7DQoJICAgCQkJb3ZlcmZsb3c6IGhpZGRlbjsNCgkgICAJCQlwYWRkaW5nOiAyMHB4Ow0KCSAgIAkJCWJvcmRlcjogMXB4IHNvbGlkICNEREQ7DQoJICAgCQkJYm9yZGVyLXJhZGl1czogNXB4Ow0KCSAgIAkJfQ0KCSAgIAkJI21haW4tc2xpZGVyLXN0b3JlbG9jYXRvcnsNCgkgICAJCQlib3JkZXI6IDFweCBzb2xpZCAjZGRkOw0KCSAgIAkJfQ0KCSAgIAkJI21haW4tc2xpZGVyLXN0b3JlbG9jYXRvciAuaXRlbXsNCgkgICAJCQlib3JkZXItdG9wOiAwOw0KCSAgIAkJCWJvcmRlci1yaWdodDogMDsNCgkgICAJCQlib3JkZXItbGVmdDogMDsNCiAgICAJCQlib3JkZXItcmFkaXVzOiAwOw0KICAgIAkJCW1hcmdpbi1ib3R0b206IDA7DQoJICAgCQl9DQoJICAgCQkjbWFpbi1zbGlkZXItc3RvcmVsb2NhdG9yIC5pdGVtIC5pdGVtLWNvbnRlbnR7DQoJICAgCQkJZm9udC1zaXplOiAxM3B4Ow0KCSAgIAkJfQ0KCSAgIAkJI21haW4tc2xpZGVyLXN0b3JlbG9jYXRvciAuaXRlbSAubGlua2RldGFpbHN0b3JlLA0KCSAgIAkJI21haW4tc2xpZGVyLXN0b3JlbG9jYXRvciAuaXRlbSAuZ2V0ZGlyZWN0aW9uc3RvcmV7DQoJICAgCQkJZm9udC1zaXplOiAxMnB4Ow0KCSAgIAkJfQ0KCSAgIAkJLm1hcF9jb250YWluZXJ7DQoJICAgCQkJbWFyZ2luLXRvcDogMjVweDsNCgkgICAJCQlib3JkZXI6IDFweCBzb2xpZCAjZGRkOw0KCSAgIAkJfQ0KCSAgIAkJLm1hcF9jb250YWluZXIgLmxpbmtkZXRhaWxzdG9yZSwNCgkJICAgIC5tYXBfY29udGFpbmVyIC5nZXRkaXJlY3Rpb25zdG9yZXsNCgkJICAgIAlmb250LXNpemU6IDExcHg7DQoJCSAgICAJbWFyZ2luLWJvdHRvbTogNXB4Ow0KCQkgICAgfQ0KCQkgICAgLm1hcF9jb250YWluZXIgLmxpbmtkZXRhaWxzdG9yZSAuZmEsDQoJCSAgICAubWFwX2NvbnRhaW5lciAuZ2V0ZGlyZWN0aW9uc3RvcmUgLmZhew0KCQkgICAgCWRpc3BsYXk6IG5vbmU7DQoJCSAgICB9DQoJICAgCX0NCgkgICAJQG1lZGlhICBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXsNCgkgICAJCS5tYXBfY29udGFpbmVyIC5saW5rZGV0YWlsc3RvcmUsDQoJCSAgICAubWFwX2NvbnRhaW5lciAuZ2V0ZGlyZWN0aW9uc3RvcmV7DQoJCSAgICAJd2lkdGg6IDEwMCU7DQoJCSAgICB9DQoJICAgCX0NCgkgICAJI2J0bi1maWx0ZXJ7DQoJICAgCQlmbG9hdDogbGVmdDsNCgkJICAgIHdpZHRoOiAxMDAlOw0KCQkgICAgYmFja2dyb3VuZC1jb2xvcjojRjhGOEY4Ow0KCSAgICAgIGNvbG9yOiMzMzM7DQoJCSAgICBtYXJnaW4tdG9wOiAxNXB4Ow0KCQkgICAgcGFkZGluZzogNHB4IDVweDsNCgkJICAgIGN1cnNvcjogcG9pbnRlcjsNCgkJICAgIGZvbnQtd2VpZ2h0OiA2MDA7DQoJCSAgICBwb3NpdGlvbjogcmVsYXRpdmU7DQoJICAgCX0NCgkgICAJI2J0bi1maWx0ZXI6YWZ0ZXJ7DQoJICAgCQkgCXBvc2l0aW9uOiBhYnNvbHV0ZTsNCgkgICAJCQljb250ZW50OiAiIjsNCgkgICAJCSAgd2lkdGg6IDBweDsNCgkJCSAgICBoZWlnaHQ6IDBweDsNCgkJCSAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50Ow0KCQkJICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50Ow0KCQkJICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMzMzOw0KCQkJICAgIHRvcDogMTNweDsNCiAgICAJCQlyaWdodDogN3B4Ow0KCSAgIAl9DQoJICAgCSNidG4tZmlsdGVyLm9wZW46YWZ0ZXJ7DQoJICAgCQlib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50Ow0KCQkgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7DQoJCSAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzMzMzsNCgkJICAgIGJvcmRlci10b3A6IDA7DQoJCSAgICB0b3A6IDEzcHg7DQogIAkJCXJpZ2h0OiA3cHg7DQoJICAgCX0NCgkgICAJI2ZpbHRlci1ncm91cCB7DQoJCQkgICAgaGVpZ2h0OjBweDsNCgkJCSAgICB3aWR0aDogMTAwJTsNCgkgICAgICAgIGZsb2F0OiBsZWZ0Ow0KCSAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3OyovDQoJCQkgICAgLXdlYmtpdC10cmFuc2l0aW9uOmhlaWdodCwgMC41cyBsaW5lYXI7DQoJCQkgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQsIDAuNXMgbGluZWFyOw0KCQkJICAgIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQsIDAuNXMgbGluZWFyOw0KCQkJICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCwgMC41cyBsaW5lYXI7DQoJCQkgICAgdHJhbnNpdGlvbjogaGVpZ2h0LCAwLjVzIGxpbmVhcjsNCgkJCSAgICBvdmVyZmxvdzogaGlkZGVuOw0KCQkJfQ0KICAgIAkjZmlsdGVyLWdyb3VwLm9wZW4gew0KICAgICAgICBoZWlnaHQ6YXV0bzsNCiAgICAgICANCgkJICAgICAtd2Via2l0LXRyYW5zaXRpb246aGVpZ2h0LCAwLjVzIGxpbmVhcjsNCgkJICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0LCAwLjVzIGxpbmVhcjsNCgkJICAgIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQsIDAuNXMgbGluZWFyOw0KCQkgICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0LCAwLjVzIGxpbmVhcjsNCgkJICAgIHRyYW5zaXRpb246IGhlaWdodCwgMC41cyBsaW5lYXI7DQoJICAgIH0NCgkgICAgI2ZpbHRlci1ncm91cCA+IGRpdnsNCgkgICAgCXBhZGRpbmc6IDEwcHg7DQoJICAgIH0NCgkgICAgLyojZmlsdGVyLWdyb3VwID4gZGl2Om50aC1vZi10eXBlKGV2ZW4pew0KCSAgICAJYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsNCgkgICAgfSovDQoJICAgIC5ib290c3RyYXAtc3RvcmVpZnlhcHBzIHVsLnN0b3JlaWZ5YXBwX3N0b3Jlc190YWdzX2ZpbHRlcl9saXN0LA0KCSAgICAuYm9vdHN0cmFwLXN0b3JlaWZ5YXBwcyB1bC5zdG9yZWlmeWFwcF9zdG9yZXNfY291bnRyeXNfZmlsdGVyX2xpc3R7DQoJICAgIAltYXJnaW4tYm90dG9tOiAwOw0KCSAgICB9DQoJICAgIHNlbGVjdC5zdG9yZWlmeWFwcF9zdG9yZXNfY291bnRyeXNfZmlsdGVyX2xpc3R7d2lkdGg6IDEwMCU7ZGlzcGxheTogYmxvY2s7fQ0KCSAgICBAbWVkaWEgIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NzJweCl7DQoJCQkjbWFwe21heC1oZWlnaHQ6IDc1NXB4O30NCgkJCS5zdG9yZWlmeS1zZWFyLWJveHtmbG9hdDogbGVmdDt3aWR0aDogMTAwJTt9DQoJICAgIH0NCgkgICAgDQoJPC9zdHlsZT4NCgkNCgk8ZGl2IGNsYXNzPSJjb250YWluZXItZmx1aWQiPg0KCQk8ZGl2IGNsYXNzPSJzZWN0aW9uLWhlYWRlciB0ZXh0LWNlbnRlciI+DQoJCQkJCQkNCgkJPC9kaXY+DQoJPC9kaXY+DQoJDQoJPGRpdiBjbGFzcz0iY29udGFpbmVyLWZsdWlkIj4NCgkJPGRpdiBjbGFzcz0ic3RvcmVsb2NhdG9yLXNlYXJjaCBzdG9yZWxvY2F0b3ItbGF5b3V0LTIiIGlkPSJzdG9yZWlmeWFwcHMtc3RvcmVsb2NhdG9yLWluZGV4Ij4NCgkJCTxmb3JtIGlkPSJmcm0tc3RvcmVsb2NhdG9yLXNlYXJjaCIgY2xhc3M9ImZvcm0taW5saW5lIj4NCgkJCQk8aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJfdG9rZW4iIHZhbHVlPSJtcWVMWEJvUWdzNkpLQ3VhZmNtOHZuWDg2MXp1ampsUDZTUmtTejJUIj4NCgkJCTxkaXYgY2xhc3M9InJvdyI+DQoJCQkJPGRpdiBjbGFzcz0ic3RvcmVpZnktc3RsLWNvbDEgY29sLW1kLTQgc3RvcmVpZnlhcHBzLXN0b3JlbG9jYXRvci1lcXVhbCIgPg0KCQkJCQk8ZGl2IGNsYXNzPSJzdG9yZWlmeS1zZWFyLWJveCI+DQoJCQkJCQk8ZGl2IGNsYXNzPSJzZWFyY2gtYWRkcmVzcy1ib3giPg0KCQkJCQkJCQkJCQkJCQk8c2VsZWN0ICBjbGFzcz0iY2hvc2Utc2VhcmNoLXNsdCBmb3JtLWNvbnRyb2wtc3RvcmVpZnkiPg0KCQkJCQkJCQk8b3B0aW9uIHNlbGVjdGVkPSJzZWxlY3RlZCIgdmFsdWU9ImxvY2F0aW9uIj5Mb2NhdGlvbjwvb3B0aW9uPg0KCQkJCQkJCQk8b3B0aW9uIHZhbHVlPSJzdG9yZSI+U3RvcmUgbmFtZTwvb3B0aW9uPg0KCQkJCQkJCTwvc2VsZWN0Pg0KCQkJCQkJCQkJCQkJCQk8ZGl2IGNsYXNzPSJnci1zZWFyY2gtc2x0IiA+DQoJCQkJCQkJCTxpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJhZGRyZXNzIiBjbGFzcz0iZm9ybS1jb250cm9sLXN0b3JlaWZ5IiAgcGxhY2Vob2xkZXI9IlR5cGUgdG8gc2VhcmNoIG91ciBzdG9yZXMiIGlkPSJhZGRyZXNzIiAvPg0KCQkJCQkJCQk8YnV0dG9uIGlkPSJnZXRieWxvY2FsIj48c3BhbiBjbGFzcz0ibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbXlfbG9jYXRpb24iPm15X2xvY2F0aW9uPC9zcGFuPiBVc2UgbXkgbG9jYXRpb248L2J1dHRvbj4NCgkJCQkJCQk8L2Rpdj4NCgkJCQkJCQkNCgkJCQkJCQkJCQkJCQkJCQkJCQkJCTxpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzcz0ic2VhcmNoLXNsdCBpbnB1dCBmb3JtLWNvbnRyb2wtc3RvcmVpZnkiIHBsYWNlaG9sZGVyPSJTZWFyY2ggYnkgc3RvcmUgbmFtZSIgbmFtZT0ic3RvcmVfc2VhcmNoIiBpZD0ic3RvcmVfc2VhcmNoIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPg0KCQkJCQkJCQkJCQkJCTwvZGl2Pg0KCQkJCQkJPGRpdiBjbGFzcz0ic2VhcmNoLXJhZGl1cy1ib3giPg0KCQkJCQkJCTxkaXYgY2xhc3M9ImlucHV0LXJhZGl1cy1zbHQiPg0KCQkJCQkJCQk8IS0tPGRpdiBjbGFzcz0iaGlkZGVuLXNtIGhpZGRlbi14cyBsYWJlbC1yYWRpdXMiPg0KCQkJCQkJCQkJPGxhYmVsPlJhZGl1czwvbGFiZWw+DQoJCQkJCQkJCTwvZGl2Pi0tPg0KCQkJCQkJCQk8ZGl2IGNsYXNzPSJyYWRpdXMtdmFsdWUtY29udGFpbmVyIj4NCgkJCQkJCQkJICAgPGRpdiBpZD0icmFkaXVzLXZhbHVlIj48bGFiZWw+UmFkaXVzOjwvbGFiZWw+IDxzcGFuIGNsYXNzPSJudW0tcmFuZ2UiPjIwPC9zcGFuPg0KCQkJCQkJCQkJIGttIAkJCQkJCQkJICAgPC9kaXY+DQoJCQkJCQkJCTwvZGl2Pg0KCQkJCQkJCQk8ZGl2IGNsYXNzPSJyYW5nZS1yYWRpdXMiPg0KCQkJCQkJCQkJPGlucHV0IHN0eWxlPSJwYWRkaW5nOiAwOyIgaWQ9InJhZGl1c19zZWFyY2giIGNsYXNzPSJzbGlkZXIiIHR5cGU9InJhbmdlIiBuYW1lPSJwb2ludHMiIG1pbj0iMSIgbWF4PSIxMDAiIHZhbHVlPSIyMCIgdGl0bGU9IlJhZGl1cyI+DQoJCQkJCQkJCTwvZGl2Pg0KCQkJCQkJCQkNCgkJCQkJCQk8L2Rpdj4NCg0KCQkJCQkJPC9kaXY+DQoJCQkJCQk8ZGl2IGlkPSJidG4tZmlsdGVyIj5GaWx0ZXI8L2Rpdj4NCgkJCQkJCTxkaXYgaWQ9ImZpbHRlci1ncm91cCIgPg0KCQkJCQkJCTxkaXYgaWQ9InRhZ3MiPjwvZGl2Pg0KCQkJCQkJCTxkaXYgaWQ9ImNvdW50cnlfaHRtbCI+PC9kaXY+DQoJCQkJCQk8L2Rpdj4NCgkJCQkJCTxkaXYgY2xhc3M9InNlYWNoLWFjdGlvbi1ib3ggc2VhcmNoLXR5cGUiPg0KCQkJCQkJCTwhLS08YSBpZD0ic3VibWl0LXNlYXJjaCIgY2xhc3M9InN1Ym1pdCIgdGl0bGU9IlNlYXJjaCI+PHNwYW4gY2xhc3M9ImZhIGZhLXNlYXJjaCIgYXJpYS1oaWRkZW49InRydWUiPjwvc3Bhbj48L2E+LS0+DQoJCQkJCQkJPGJ1dHRvbiBpZD0ic3VibWl0LXNlYXJjaCIgY2xhc3M9InN1Ym1pdCIgdGl0bGU9IlNlYXJjaCI+DQoJCQkJCQkJCTxzcGFuIGNsYXNzPSJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCI+dHJhdmVsX2V4cGxvcmU8L3NwYW4+IFNlYXJjaA0KCQkJCQkJCTwvYnV0dG9uPg0KCQkJCQkJCTxzcGFuIGlkPSJyZXNldC1zZWFyY2giIGNsYXNzPSJyZXNldCIgdGl0bGU9IlJlc2V0Ij48c3BhbiBjbGFzcz0ibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQiPnlvdXR1YmVfc2VhcmNoZWRfZm9yPC9zcGFuPjwvc3Bhbj4NCgkJCQkJCTwvZGl2Pg0KCQkJCQk8L2Rpdj4NCgkJCQkJPGRpdiBjbGFzcz0ibWFwLXRhYi1tb2JpbGUtYm50Ij4NCgkJCQkJCTxkaXYgY2xhc3M9Im1hcC10YWItbW9iaWxlLWJudC1pdGVtIiBpZD0ic2wtdGFiLWxpc3QiIG9uY2xpY2s9InN0b3JlaWZ5T3BlbnRhYih0aGlzLCdtYXAtdGFiLXJlc3VsdCcpIiBkYXRhLXZhbCA9Im1hcC10YWItcmVzdWx0IiBzdHlsZT0iZmxvYXQ6IGxlZnQ7Ij5MaXN0PC9kaXY+DQoJCQkJCQk8ZGl2IGNsYXNzPSJtYXAtdGFiLW1vYmlsZS1ibnQtaXRlbSBhY3RpdmUiIGlkPSJzbC10YWItbWFwIiBvbmNsaWNrPSJzdG9yZWlmeU9wZW50YWIodGhpcywnbWFwLXRhYi1nZ21hcCcpIiBkYXRhLXZhbCA9Im1hcC10YWItZ2dtYXAiIHN0eWxlPSJmbG9hdDogcmlnaHQ7Ij5NYXA8L2Rpdj4NCgkJCQkJPC9kaXY+DQoJCQkJCTxkaXYgY2xhc3M9Im1hcC10YWItcmVzdWx0IG1hcC10YWItbW9iaWxlIj4NCgkJCQkJCTxkaXYgaWQ9InJlc3VsdHMtZW1wdHkiIGNsYXNzPSJyZXN1bHRzLXNsdCByZXN1bHRzLXNsdC1sYXlvdXQtMiAiID48L2Rpdj4NCgkJCQkJCTxkaXYgaWQ9InJlc3VsdHMtc2x0IiBjbGFzcz0icmVzdWx0cy1zbHQgcmVzdWx0cy1zbHQtbGF5b3V0LTIgIiBzdHlsZT0iZGlzcGxheTpub25lIj4NCg0KCQkJCQkJCTxoMyBjbGFzcz0idGl0bGUiPlN0b3JlIGxpc3QgPHNwYW4gY2xhc3M9Im51bS1ycy13cmFwIj4oPHNwYW4gaWQ9Im51bS1ycyI+MDwvc3Bhbj4gPHNwYW4gaWQ9InN0b3JlaWZ5LXRleHQtcmVzdWx0IiBkYXRhLXJlc3VsdD0icmVzdWx0IiBkYXRhLXJlc3VsdHM9InJlc3VsdHMiPnJlc3VsdDwvc3Bhbj4pPC9zcGFuPjwvaDM+DQoNCgkJCQkJCQk8ZGl2IGNsYXNzPSJjb250ZW50LXJlc3VsdHMtc2x0IiAgaWQ9ImxvY2F0aW9uIj4NCgkJCQkJCQk8L2Rpdj4NCgkJCQkJCTwvZGl2Pg0KCQkJCQk8L2Rpdj4NCg0KCQkJCTwvZGl2Pg0KCQkJCTxkaXYgY2xhc3M9InN0b3JlaWZ5LXN0bC1jb2wxIGNvbC1tZC04IG1hcC10YWItZ2dtYXAgbWFwLXRhYi1tb2JpbGUgYWN0aXZlIiA+DQoJCQkJCTxkaXYgY2xhc3M9Im1hcF9jb250YWluZXIgdG9wIHNlYXJjaC1tYXAiPg0KCQkJCQkJPGRpdiBpZD0ibWFwIiA+PC9kaXY+DQoJCQkJCTwvZGl2Pg0KCQkJCQk8cCBjbGFzcz0ibG9hZGVyIiBpZD0ibG9hZGluZ19tYXNrX2xvYWRlciIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+DQoJCQkJCQk8aW1nIHNyYz0iaHR0cHM6Ly9zbC5zdG9yZWlmeS5hcHAvaW1hZ2VzL2Zyb250ZW5kL0FqYXhMb2FkZXIuZ2lmIj4NCgkJCQkJPC9wPg0KCQkJCQkNCgkJCQk8L2Rpdj4NCgkJCTwvZGl2Pg0KCQkJPC9mb3JtPg0KCQk8L2Rpdj4NCgk8L2Rpdj4NCjwvZGl2Pg0KCTxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBkZWZlcj0iZGVmZXIiPg0KCWZ1bmN0aW9uIHN0b3JlaWZ5T3BlbnRhYih0LGVsZSkgew0KCSAgLy8gdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibXlESVYiKTsNCgkgICAgdmFyIGVsZV8xID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIm1hcC10YWItbW9iaWxlLWJudC1pdGVtIik7DQoJICAgIHZhciBlbGVfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIm1hcC10YWItbW9iaWxlIik7DQoJICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlXzEubGVuZ3RoOyBpKyspIHsNCgkJICAgZWxlXzFbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7DQoJCSAgIGVsZV8yW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOw0KCQl9DQoJICB0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOw0KCSAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbGUpWzBdLmNsYXNzTGlzdC5hZGQoImFjdGl2ZSIpOw0KCSAgLy8gJCgnLicrJCh0aGlzKS5kYXRhKCd2YWwnKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOw0KCX0NCg0KCS8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZmlsdGVyJykub25jbGljayA9IGZ1bmN0aW9uKCkgew0KCS8vIAkJbXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWdyb3VwJyk7DQoJLy8gICAgIHZhciBjbGFzc05hbWUgPSBteUJ1dHRvbi5jbGFzc05hbWU7DQoJLy8gICAgIHZhciBjbGFzc05hbWUyID0gdGhpcy5jbGFzc05hbWU7DQoJLy8gICAgIG15QnV0dG9uLmNsYXNzTmFtZSA9IH5jbGFzc05hbWUuaW5kZXhPZignb3BlbicpID8NCgkvLyAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnJlcGxhY2UoJ29wZW4nLCAnJykgOg0KCS8vICAgICAgICAgICAgICAgICAgICAgICAgICBteUJ1dHRvbi5jbGFzc05hbWUgKyAnb3Blbic7DQoJLy8gICAgIHRoaXMuY2xhc3NOYW1lID0gfmNsYXNzTmFtZTIuaW5kZXhPZignb3BlbicpID8NCgkvLyAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lMi5yZXBsYWNlKCdvcGVuJywgJycpIDoNCgkvLyAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgKyAnb3Blbic7DQoJLy8gfQ0KDQoJLy8galF1ZXJ5Lm5vQ29uZmxpY3QoKTsNCgkvLyAoZnVuY3Rpb24oICQgKSB7DQoJLy8gICAkKGZ1bmN0aW9uKCkgew0KCS8vICAgICAkKCcubWFwLXRhYi1tb2JpbGUtYm50LWl0ZW0nKS5jbGljayhmdW5jdGlvbigpIHsNCgkvLyAJCSQoJy5tYXAtdGFiLW1vYmlsZS1ibnQtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsNCgkvLyAJCSQoJy5tYXAtdGFiLW1vYmlsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsNCgkvLyAJCSQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpOw0KCS8vIAkJJCgnLicrJCh0aGlzKS5kYXRhKCd2YWwnKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpOw0KCS8vIAl9KTsNCgkvLyAgIH0pOw0KCS8vIH0pKGpRdWVyeSk7DQoJCQ0KCTwvc2NyaXB0Pg0KCTxsaW5rIGhyZWY9Imh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29uc3xNYXRlcmlhbCtJY29ucytPdXRsaW5lZCIgcmVsPSJzdHlsZXNoZWV0Ij4NCgk=";var html_render_short = "PGxpbmsgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hdGVyaWFsK0ljb25zfE1hdGVyaWFsK0ljb25zK091dGxpbmVkIiByZWw9InN0eWxlc2hlZXQiPg0KCTxkaXYgY2xhc3M9ImJvb3RzdHJhcC1zdG9yZWlmeWFwcHMgc3RvcmVpZnlhcHBzLXN0b3JlbG9jYXRvci1sYXlvdXQtc2hvcnQiPg0KCQ0KCQ0KCQkJCTxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4NCgkJdmFyIGxheW91dCA9IDI7DQoJCXZhciBvd2xfY2xhc3M9ImZ1bGwtd2lkdGgiOw0KCQl2YXIgY2VudGVyX2xhdCA9ICcwJzsvLyctMTIyLjc0ODM1Nic7DQoJCXZhciBjZW50ZXJfbG5nID0gJzAnOy8vJzQ4Ljk5NDMyMyc7DQoJCXZhciBpbml0aWFsX3pvb20gPSAyOy8vMjsNCgkJdmFyIGJhc2V1cmwgPSAnJzsNCgkJdmFyIHNlYXJjaF9yZXN1bHRfem9vbSA9IDI7Ly8yOw0KCQl2YXIgcmFkaXVzX3VuaXQgPSAxOw0KCQl2YXIgbWFwOw0KCQl2YXIgbWFya2VycyA9IFtdOw0KCQl2YXIgaW5mb1dpbmRvdzsNCgkJdmFyIGxvY2F0aW9uRGl2Ow0KCQl2YXIgcmFuZG9tSUQgPSAnbWFpbi1zbGlkZXItc3RvcmVsb2NhdG9yJzsNCgkJdmFyIHRyYW5zPSB7DQoJCQkJCSdsaW5rX2RldGFpbCc6J1ZpZXcgRGV0YWlscycsDQoJCQkJCSdnZXRkaXJlY3Rpb24nOidEaXJlY3Rpb25zJywNCgkJCQkJJ2VtYWlsJzonRW1haWwnLA0KCQkJCQkncGhvbmUnOidQaG9uZSBOdW1iZXInLA0KCQkJCQkncGhvbmVfbm8nOidQaG9uZSBObycsDQoJCQkJCSdhZGRyZXNzJzonQWRkcmVzcycsDQoJCQkJCSdzdG9yZV9uZWFyJzonVGhlcmUgaXMgbm8gc3RvcmUgbmVhciB3aXRoICcsDQoJCQkJCSdhZGRyZXNzX251bGwnOicgaXMgbm90IGZvdW5kJywNCgkJCQkJJ25vX3Jlc3VsdCc6J05vIHJlc3VsdHMgZm91bmQnLA0KCQkJCQknZ2VvY29kZXJfZmFpbGVkJzonR2VvY29kZXIgZmFpbGVkIGR1ZSB0bzogJywNCgkJCQkJJ3BsZWFzZV9lbnRlcic6J1BsZWFzZSBlbnRlciBhIGxvY2F0aW9uLicsDQoJCQkJCSdub19zdG9yZSc6J1RoZXJlIGlzIG5vIHN0b3JlJywNCgkJCQkJJ25vX3N0b3JlX3Byb2R1Y3QnOidub19zdG9yZV9wcm9kdWN0JywNCgkJCQkJJ25vX3N0b3JlX25hbWUnOidub19zdG9yZV9uYW1lJ307DQoNCgkJdmFyIGljb25fbWFya2VyID0gIiI7DQoNCgk8L3NjcmlwdD4NCgk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCQkucmFuZ2UtcmFkaXVzIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHsNCgkJICBiYWNrZ3JvdW5kOiAjMzMzMzMzICFpbXBvcnRhbnQ7DQoJCX0NCgkJLnJhbmdlLXJhZGl1cyAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHsNCgkJICBiYWNrZ3JvdW5kOiAjNENBRjUwOw0KCQl9DQoJCS5saW5rZGV0YWlsc3RvcmUsIC5nZXRkaXJlY3Rpb25zdG9yZXtib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzICFpbXBvcnRhbnQ7fQ0KCSAgICAucmVzdWx0cy1zbHQgLnRpdGxlew0KCSAgICAgIGJhY2tncm91bmQtY29sb3I6IzMzMzMzMyAhaW1wb3J0YW50Ow0KCSAgICAgIGNvbG9yOiNGRkZGRkYgIWltcG9ydGFudDsNCgkgICAgfQ0KCSAgICAJICAgIC50YWctaXRlbXsNCgkgICAgCWRpc3BsYXk6IGlubGluZS1ibG9jazsNCgkgICAgCXBhZGRpbmc6IDBweCA0cHggMXB4IDJweDsgIA0KCSAgICB9DQoJICAgIC50YWctaXRlbSAuZmF7DQoJICAgIAljb2xvcjogZ3JlZW47DQoJICAgIAlwYWRkaW5nLXJpZ2h0OiAxcHg7DQoJICAgIH0NCgkgICAJLnN0b3JlaWZ5YXBwcy1zdG9yZWxvY2F0b3ItbGF5b3V0LTEgLnJlc3VsdHMtc2x0IC50aXRsZXsNCgkgICAJCW1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDsNCgkgICAJfQ0KCSAgIAkNCgkgICAJLypjdXNyb20gdGVzdCovDQoJICAgDQoJICAgCS5tYXAtdGFiLW1vYmlsZS1ibnQtaXRlbS5hY3RpdmV7DQoJICAgCQkgYmFja2dyb3VuZC1jb2xvcjojMzMzMzMzICFpbXBvcnRhbnQ7DQoJICAgICAgICAgY29sb3I6I0ZGRkZGRiAhaW1wb3J0YW50Ow0KCSAgIAl9DQoJICAgCUBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCl7DQoJICAgCQkNCgkgICAJCS5zdG9yZWxvY2F0b3ItbGF5b3V0LTJ7DQoJICAgCQkJYm9yZGVyOiAwOw0KCSAgIAkJCXBhZGRpbmc6IDEwcHg7DQoNCgkgICAJCX0NCgkgICAJCS5jaG9zZS1zZWFyY2gtc2x0LmZvcm0tY29udHJvbC1zdG9yZWlmeXsNCgkgICAJCQlkaXNwbGF5OiBibG9jazsNCgkgICAJCQl3aWR0aDogMTAwJTsNCgkgICAJCQltYXJnaW4tYm90dG9tOiAxMHB4Ow0KCSAgIAkJfQ0KCSAgIAkJLnN0b3JlaWZ5LXNlYXItYm94ew0KCSAgIAkJCXdpZHRoOiAxMDAlOw0KCSAgIAkJCW92ZXJmbG93OiBoaWRkZW47DQoJICAgCQkJcGFkZGluZzogMjBweDsNCgkgICAJCQlib3JkZXI6IDFweCBzb2xpZCAjREREOw0KCSAgIAkJCWJvcmRlci1yYWRpdXM6IDVweDsNCgkgICAJCX0NCgkgICAJCSNtYWluLXNsaWRlci1zdG9yZWxvY2F0b3J7DQoJICAgCQkJYm9yZGVyOiAxcHggc29saWQgI2RkZDsNCgkgICAJCX0NCgkgICAJCSNtYWluLXNsaWRlci1zdG9yZWxvY2F0b3IgLml0ZW17DQoJICAgCQkJYm9yZGVyLXRvcDogMDsNCgkgICAJCQlib3JkZXItcmlnaHQ6IDA7DQoJICAgCQkJYm9yZGVyLWxlZnQ6IDA7DQogICAgCQkJYm9yZGVyLXJhZGl1czogMDsNCiAgICAJCQltYXJnaW4tYm90dG9tOiAwOw0KCSAgIAkJfQ0KCSAgIAkJI21haW4tc2xpZGVyLXN0b3JlbG9jYXRvciAuaXRlbSAuaXRlbS1jb250ZW50ew0KCSAgIAkJCWZvbnQtc2l6ZTogMTNweDsNCgkgICAJCX0NCgkgICAJCSNtYWluLXNsaWRlci1zdG9yZWxvY2F0b3IgLml0ZW0gLmxpbmtkZXRhaWxzdG9yZSwNCgkgICAJCSNtYWluLXNsaWRlci1zdG9yZWxvY2F0b3IgLml0ZW0gLmdldGRpcmVjdGlvbnN0b3Jlew0KCSAgIAkJCWZvbnQtc2l6ZTogMTJweDsNCgkgICAJCX0NCgkgICAJCS5tYXBfY29udGFpbmVyew0KCSAgIAkJCW1hcmdpbi10b3A6IDI1cHg7DQoJICAgCQkJYm9yZGVyOiAxcHggc29saWQgI2RkZDsNCgkgICAJCX0NCgkgICAJCS5tYXBfY29udGFpbmVyIC5saW5rZGV0YWlsc3RvcmUsDQoJCSAgICAubWFwX2NvbnRhaW5lciAuZ2V0ZGlyZWN0aW9uc3RvcmV7DQoJCSAgICAJZm9udC1zaXplOiAxMXB4Ow0KCQkgICAgCW1hcmdpbi1ib3R0b206IDVweDsNCgkJICAgIH0NCgkJICAgIC5tYXBfY29udGFpbmVyIC5saW5rZGV0YWlsc3RvcmUgLmZhLA0KCQkgICAgLm1hcF9jb250YWluZXIgLmdldGRpcmVjdGlvbnN0b3JlIC5mYXsNCgkJICAgIAlkaXNwbGF5OiBub25lOw0KCQkgICAgfQ0KCSAgIAl9DQoJICAgCUBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7DQoJICAgCQkubWFwX2NvbnRhaW5lciAubGlua2RldGFpbHN0b3JlLA0KCQkgICAgLm1hcF9jb250YWluZXIgLmdldGRpcmVjdGlvbnN0b3Jlew0KCQkgICAgCXdpZHRoOiAxMDAlOw0KCQkgICAgfQ0KCSAgIAl9DQoNCgkuc2VhcmNoLWFkZHJlc3MtYm94ew0KCQlwb3NpdGlvbjogcmVsYXRpdmU7DQoJCXBhZGRpbmctcmlnaHQ6IDE0MHB4Ow0KCX0NCgkjc3VibWl0LXNlYXJjaHsNCgkJcG9zaXRpb246IGFic29sdXRlOw0KCQlyaWdodDogMTBweDsNCgkJdG9wOiAwOw0KCQloZWlnaHQ6IDQwcHg7DQoJCWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7DQoJCWxpbmUtaGVpZ2h0OiA0MHB4Ow0KCQl3aWR0aDogMTIwcHg7DQoJCXRleHQtYWxpZ246IGNlbnRlcjsNCgkJcGFkZGluZzogMCAhaW1wb3J0YW50Ow0KCQlib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7DQoJfQ0KCS5zZWFyY2gtcmFkaXVzLWJveHsNCgkJbWF4LXdpZHRoOiAxMDAlOw0KCQl3aWR0aDogNDAwcHg7DQoJfQ0KCSNnZXRieWxvY2Fsew0KCQlmbG9hdDogcmlnaHQ7DQoJfQ0KCS5pbm5lci1zdG9yZWlmeS1zdGwtY29sMXsNCgkJbWF4LXdpZHRoOiAxMDAwcHg7DQoJCW92ZXJmbG93OiBoaWRkZW47DQoJCW1hcmdpbjogMCBhdXRvOw0KCQl0ZXh0LWFsaWduOiBsZWZ0Ow0KCQlwYWRkaW5nOiAxMHB4Ow0KCX0NCgkuc3RvcmVpZnktbW9kYWwtY29udGVudHsNCiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYgIWltcG9ydGFudDsNCiAgICAgIGJvcmRlcjowICFpbXBvcnRhbnQ7DQogICAgICBib3JkZXItcmFkaXVzOiAxMHB4Ow0KICAgICAgbWF4LXdpZHRoOiA3NTBweDsNCiAgICAgIG92ZXJmbG93OiBoaWRkZW47DQogICAgICBmb250LXNpemU6IDEzcHg7DQogICAgfQ0KICAgIC5zdG9yZWlmeS1tb2RhbC1jb250ZW50IGxhYmVsew0KICAgIAlkaXNwbGF5OiBpbmxpbmUtYmxvY2s7DQoJICAgIG1heC13aWR0aDogMTAwJTsNCgkgICAgbWFyZ2luLWJvdHRvbTogNXB4Ow0KCSAgICBmb250LXdlaWdodDogNzAwOw0KCSAgICBtYXJnaW4tcmlnaHQ6IDVweDsNCiAgICB9DQogICAgLnN0b3JlaWZ5LW1vZGFsLWhlYWRlcnsNCiAgICAJcG9zaXRpb246IHJlbGF0aXZlOw0KICAgIAlwYWRkaW5nOiAxNXB4IDI1cHggNXB4IDI1cHggIWltcG9ydGFudDsNCiAgICAJZm9udC1zaXplOiAxNHB4Ow0KICAgIAliYWNrZ3JvdW5kLWNvbG9yOiMzMzMzMzMgIWltcG9ydGFudDsNCgkgICAgY29sb3I6I0ZGRkZGRiAhaW1wb3J0YW50Ow0KICAgIH0NCiAgICAuc3RvcmVpZnktbW9kYWwtaGVhZGVyIC50aXRsZXsNCiAgICAJbWFyZ2luOiA1cHggMDsNCiAgICB9DQogICAgLnN0b3JlaWZ5LW1vZGFsLWVsb24gLmFsZXJ0LWRhbmdlcnsNCiAgICAJZm9udC1zaXplOiAxNHB4Ow0KCSAgICBtYXJnaW46IDE1cHggMDsNCgkgICAgY29sb3I6ICNmNTQyNDINCiAgICB9DQogICAgLnN0b3JlaWZ5LW1vZGFsLWNvbnRlbnQgLnRodW1ibmFpbCB7DQoJICAgIGRpc3BsYXk6IGJsb2NrOw0KCSAgICBwYWRkaW5nOiA0cHg7DQoJICAgIG1hcmdpbi1ib3R0b206IDEwcHg7DQoJICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzOw0KCSAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOw0KCSAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOw0KCSAgICBib3JkZXItcmFkaXVzOiA0cHg7DQoJICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIC4ycyBlYXNlLWluLW91dDsNCgkgICAgLW8tdHJhbnNpdGlvbjogYm9yZGVyIC4ycyBlYXNlLWluLW91dDsNCgkgICAgdHJhbnNpdGlvbjogYm9yZGVyIC4ycyBlYXNlLWluLW91dDsNCgl9DQogICAgLnN0b3JlaWZ5LW1vZGFsLWNvbnRlbnQgI3N0b3JlaWZ5LWNvbnRhY3RGb3Jtew0KICAgICAgcGFkZGluZzogMTVweCA1cHg7DQogICAgfQ0KICAgIC5zdG9yZWlmeS1tb2RhbC1jb250ZW50IGlucHV0LmZpZWxkX19pbnB1dHsNCiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50Ow0KICAgIH0NCiAgICAuc3RvcmVpZnktbW9kYWwtY29udGVudCAuZmllbGRfX2lucHV0ew0KICAgICAgZGlzcGxheTogYmxvY2sgOw0KICAgICAgd2lkdGg6IDEwMCUgOw0KICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZSA7DQogICAgICBiYWNrZ3JvdW5kOiNmZmYgOw0KICAgICAgcGFkZGluZzogMTBweCAxNXB4Ow0KICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lIDsNCiAgICAgIGJveC1zaGFkb3c6IG5vbmUgOw0KICAgICAgb3V0bGluZTogbm9uZSA7DQogICAgICBmb250LXNpemU6IDAuOWVtIDsNCiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0IDsNCiAgICAgIGNvbG9yOiBibGFjayA7DQogICAgICBtYXJnaW4tYm90dG9tOiAyNXB4Ow0KICAgIH0NCiAgICAuc3RvcmVpZnktbW9kYWwtY29udGVudCAucmVxdWlyZWR7DQogICAgICBmb250LXNpemU6IDAuOWVtOw0KICAgIH0NCiAgICAuc3RvcmVpZnktdGl0bGUtbW9kZWx7DQogICAgICBmb250LWZhbWlseTogaW5oZXJpdCA7DQogICAgICBmb250LXNpemU6IDEuNmVtICFpbXBvcnRhbnQ7DQogICAgfQ0KICAgICNibnRDb250YWN0c3VibWl0ew0KICAgICAgcGFkZGluZzogOHB4IDM1cHg7DQogICAgICBtYXJnaW4tdG9wOiA1cHg7DQogICAgICBib3JkZXI6IG5vbmU7DQogICAgICBmb250LXdlaWdodDogNjAwOw0KICAgICAgY29sb3I6I0ZGRkZGRjsNCiAgICAgIGJhY2tncm91bmQtY29sb3I6IzNFM0UzRTsNCiAgICAgIGZvbnQtc2l6ZTogMTVweCA7DQogICAgfQ0KICAgIC5zdG9yZWlmeS1tb2RhbC1jb250ZW50IC5zdG9yZWlmeS1tb2RhbC1ib2R5e3Bvc2l0aW9uOiByZWxhdGl2ZTt9DQo8L3N0eWxlPg0KDQoJCTxkaXYgY2xhc3M9InN0b3JlbG9jYXRvci1zZWFyY2ggc3RvcmVsb2NhdG9yLWxheW91dC1zaG9ydCI+DQoJCQk8Zm9ybSBpZD0iZnJtLXN0b3JlbG9jYXRvci1zaG9ydC1zZWFyY2giIGNsYXNzPSJmb3JtLWlubGluZSI+DQoJCQkJPGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0iX3Rva2VuIiB2YWx1ZT0ibXFlTFhCb1FnczZKS0N1YWZjbTh2blg4NjF6dWpqbFA2U1JrU3oyVCI+DQoJCQk8ZGl2IGNsYXNzPSJyb3ciPg0KCQkJCTxkaXYgY2xhc3M9InN0b3JlaWZ5LXN0bC1jb2wxIGNvbC1tZC0xMiBzdG9yZWlmeWFwcHMtc3RvcmVsb2NhdG9yLWVxdWFsIiBzdHlsZT0idGV4dC1hbGlnbjogY2VudGVyOyI+DQoJCQkJCTxkaXYgY2xhc3M9ImlubmVyLXN0b3JlaWZ5LXN0bC1jb2wxIj4JDQoJCQkJCQk8ZGl2IGNsYXNzPSJzdG9yZWlmeS1zZWFyLWJveCI+DQoJCQkJCQkJPGRpdiBjbGFzcz0ic2VhcmNoLWFkZHJlc3MtYm94Ij4NCgkJCQkJCQkJPGlucHV0IHR5cGU9ImhpZGRlbiIgY2xhc3M9ImNob3NlLXNlYXJjaC1zbHQiIG5hbWU9IiIgdmFsdWU9ImxvY2F0aW9uIj4NCgkJCQkJCQkJPGRpdiBjbGFzcz0iZ3Itc2VhcmNoLXNsdCIgIHN0eWxlPSJ3aWR0aDogMTAwJTsiPg0KCQkJCQkJCQkJPGlucHV0IHR5cGU9InRleHQiIG5hbWU9ImFkZHJlc3MiIGNsYXNzPSJmb3JtLWNvbnRyb2wtc3RvcmVpZnkiICBwbGFjZWhvbGRlcj0iVHlwZSB0byBzZWFyY2ggb3VyIHN0b3JlcyIgaWQ9ImFkZHJlc3MiIC8+DQoJCQkJCQkJCQk8bGFiZWwgaWQ9ImdldGJ5bG9jYWwiIHN0eWxlPSJjdXJzb3I6IHBvaW50ZXI7Ij5Vc2UgbXkgbG9jYXRpb248L2xhYmVsPg0KCQkJCQkJCQk8L2Rpdj4NCgkJCQkJCQkJPGJ1dHRvbiBpZD0ic3VibWl0LXNlYXJjaCIgY2xhc3M9InN1Ym1pdCIgdGl0bGU9IlNlYXJjaCI+DQoJCQkJCQkJCQkJPHNwYW4gY2xhc3M9ImZhIGZhLXNlYXJjaCIgYXJpYS1oaWRkZW49InRydWUiPjwvc3Bhbj4gU2VhcmNoDQoJCQkJCQkJCTwvYnV0dG9uPg0KCQkJCQkJCQkNCgkJCQkJCQk8L2Rpdj4NCgkJCQkJCQk8ZGl2IGNsYXNzPSJzZWFyY2gtcmFkaXVzLWJveCI+DQoJCQkJCQkJCTxkaXYgY2xhc3M9ImlucHV0LXJhZGl1cy1zbHQiPg0KCQkJCQkJCQkJPCEtLTxkaXYgY2xhc3M9ImhpZGRlbi1zbSBoaWRkZW4teHMgbGFiZWwtcmFkaXVzIj4NCgkJCQkJCQkJCQk8bGFiZWw+UmFkaXVzPC9sYWJlbD4NCgkJCQkJCQkJCTwvZGl2Pi0tPg0KCQkJCQkJCQkJPGRpdiBjbGFzcz0icmFkaXVzLXZhbHVlLWNvbnRhaW5lciI+DQoJCQkJCQkJCQkgICA8ZGl2IGlkPSJyYWRpdXMtdmFsdWUiPjxsYWJlbD5SYWRpdXM6PC9sYWJlbD4gPHNwYW4gY2xhc3M9Im51bS1yYW5nZSI+MjA8L3NwYW4+DQoJCQkJCQkJCQkJIGttIAkJCQkJCQkJCSAgIDwvZGl2Pg0KCQkJCQkJCQkJPC9kaXY+DQoJCQkJCQkJCQk8ZGl2IGNsYXNzPSJyYW5nZS1yYWRpdXMiPg0KCQkJCQkJCQkJCTxpbnB1dCBzdHlsZT0icGFkZGluZzogMDsiIGlkPSJyYWRpdXNfc2VhcmNoIiBjbGFzcz0ic2xpZGVyIiB0eXBlPSJyYW5nZSIgbmFtZT0icG9pbnRzIiBtaW49IjEiIG1heD0iMTAwIiB2YWx1ZT0iMjAiIHRpdGxlPSJSYWRpdXMiPg0KCQkJCQkJCQkJPC9kaXY+DQoJCQkJCQkJCQkNCgkJCQkJCQkJPC9kaXY+DQoNCgkJCQkJCQk8L2Rpdj4NCgkJCQkJCQkNCgkJCQkJCTwvZGl2Pg0KCQkJCQkNCgkJCQkJPC9kaXY+DQoNCgkJCQk8L2Rpdj4NCgkJCQk8cCBjbGFzcz0ibG9hZGVyIiBpZD0ibG9hZGluZ19tYXNrX2xvYWRlciIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+DQoJCQkJCQk8aW1nIHNyYz0iaHR0cHM6Ly9zbC5zdG9yZWlmeS5hcHAvaW1hZ2VzL2Zyb250ZW5kL0FqYXhMb2FkZXIuZ2lmIj4NCgkJCQk8L3A+DQoJCQkJDQoJCQk8L2Rpdj4NCgkJCTwvZm9ybT4NCgkJCQ0KCQk8L2Rpdj4JDQo8L2Rpdj4NCjxkaXYgaWQ9Im1hcCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48L2Rpdj4NCg0KIDxkaXYgaWQ9InN0b3JlaWZ5LXN0b3JlbG9jdG9yLWNvbnRhY3RGcm0iIGNsYXNzPSJzdG9yZWlmeS1tb2RhbCBzdG9yZWlmeS1tb2RhbC1lbG9uIj4NCg0KICAgIDxkaXYgY2xhc3M9InN0b3JlaWZ5LW1vZGFsLWNvbnRlbnQiPg0KICAgIAk8ZGl2IGNsYXNzPSJzdG9yZWlmeS1tb2RhbC1oZWFkZXIiPg0KICAgICAgICAgIDxzcGFuIGNsYXNzPSJzdG9yZWlmeS1jbG9zZSI+JnRpbWVzOzwvc3Bhbj4NCiAgICAgICAgICA8aDMgY2xhc3M9InRpdGxlIj5TdG9yZSBsaXN0IDxzcGFuIGNsYXNzPSJudW0tcnMtd3JhcCI+KDxzcGFuIGlkPSJudW0tcnMiPjA8L3NwYW4+IDxzcGFuIGlkPSJzdG9yZWlmeS10ZXh0LXJlc3VsdCIgZGF0YS1yZXN1bHQ9InJlc3VsdCIgZGF0YS1yZXN1bHRzPSJyZXN1bHRzIj5yZXN1bHQ8L3NwYW4+KTwvc3Bhbj48L2gzPg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgPGRpdiBjbGFzcz0ic3RvcmVpZnktbW9kYWwtYm9keSI+DQoJCQk8ZGl2IGNsYXNzPSJtb2RhbC1yZXN1bHRzIj4NCgkJCQk8ZGl2IGlkPSJyZXN1bHRzLWVtcHR5IiBjbGFzcz0icmVzdWx0cy1zbHQgcmVzdWx0cy1zbHQtbGF5b3V0LTIgIiA+PC9kaXY+DQoJCQkJPGRpdiBpZD0icmVzdWx0cy1zbHQiIGNsYXNzPSJyZXN1bHRzLXNsdCByZXN1bHRzLXNsdC1sYXlvdXQtMiAiPg0KCQkJCQk8ZGl2IGNsYXNzPSJsaXN0LWN1c3RvLXN0b3JlaWZ5Ij4NCgkJCQkJPC9kaXY+DQoJCQkJPC9kaXY+CQ0KCQkJPC9kaXY+DQoJCTwvZGl2Pg0KCTwvZGl2Pg0KDQo8L2Rpdj4NCg==";var radius_default = "20";var radius_unit = "1";var priority_search = "global";var array_country = "IjxzdHlsZSB0eXBlPVwidGV4dFwvY3NzXCI+ICNjb3VudHJ5X2h0bWx7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fSA8XC9zdHlsZT5cclxuIg==";var find_location = 1;var app_url_config="https://sl.storeify.app";var shortcode_use = 0;

!(function() {

    var loadScript = function(url, callback) {

        var script = document.createElement("script");

        script.type = "text/javascript";

        // If the browser is Internet Explorer.

        if (script.readyState) {

            script.onreadystatechange = function() {

                if (script.readyState == "loaded" || script.readyState == "complete") {

                    script.onreadystatechange = null;

                    callback();

                }

            };

            // For any other browser.

        } else {

            script.onload = function() {

                callback();

            };

        }

        script.src = url;

        document.getElementsByTagName("head")[0].appendChild(script);

    };

    var storeifyappsJavaScript = function(jQuery) {
        var B64 = {
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            lookup: null,
            ie: /MSIE /.test(navigator.userAgent),
            ieo: /MSIE [67]/.test(navigator.userAgent),
            encode: function(a) {
                var e, f, g, b = B64.toUtf8(a),
                    c = -1,
                    d = b.length,
                    h = [, , ];
                if (B64.ie) {
                    for (var i = []; ++c < d;) e = b[c], f = b[++c], h[0] = e >> 2, h[1] = (3 & e) << 4 | f >> 4, isNaN(f) ? h[2] = h[3] = 64 : (g = b[++c], h[2] = (15 & f) << 2 | g >> 6, h[3] = isNaN(g) ? 64 : 63 & g), i.push(B64.alphabet.charAt(h[0]), B64.alphabet.charAt(h[1]), B64.alphabet.charAt(h[2]), B64.alphabet.charAt(h[3]));
                    return i.join("")
                }
                for (var i = ""; ++c < d;) e = b[c], f = b[++c], h[0] = e >> 2, h[1] = (3 & e) << 4 | f >> 4, isNaN(f) ? h[2] = h[3] = 64 : (g = b[++c], h[2] = (15 & f) << 2 | g >> 6, h[3] = isNaN(g) ? 64 : 63 & g), i += B64.alphabet[h[0]] + B64.alphabet[h[1]] + B64.alphabet[h[2]] + B64.alphabet[h[3]];
                return i
            },
            decode: function(a) {
                if (a.length % 4) throw new Error("InvalidCharacterError: 'B64.decode' failed: The string to be decoded is not correctly encoded.");
                var b = B64.fromUtf8(a),
                    c = 0,
                    d = b.length;
                if (B64.ieo) {
                    for (var e = []; d > c;) b[c] < 128 ? e.push(String.fromCharCode(b[c++])) : b[c] > 191 && b[c] < 224 ? e.push(String.fromCharCode((31 & b[c++]) << 6 | 63 & b[c++])) : e.push(String.fromCharCode((15 & b[c++]) << 12 | (63 & b[c++]) << 6 | 63 & b[c++]));
                    return e.join("")
                }
                for (var e = ""; d > c;) e += b[c] < 128 ? String.fromCharCode(b[c++]) : b[c] > 191 && b[c] < 224 ? String.fromCharCode((31 & b[c++]) << 6 | 63 & b[c++]) : String.fromCharCode((15 & b[c++]) << 12 | (63 & b[c++]) << 6 | 63 & b[c++]);
                return e
            },
            toUtf8: function(a) {
                var d, b = -1,
                    c = a.length,
                    e = [];
                if (/^[\x00-\x7f]*$/.test(a))
                    for (; ++b < c;) e.push(a.charCodeAt(b));
                else
                    for (; ++b < c;) d = a.charCodeAt(b), 128 > d ? e.push(d) : 2048 > d ? e.push(192 | d >> 6, 128 | 63 & d) : e.push(224 | d >> 12, 128 | 63 & d >> 6, 128 | 63 & d);
                return e
            },
            fromUtf8: function(a) {
                var c, b = -1,
                    d = [],
                    e = [, , ];
                if (!B64.lookup) {
                    for (c = B64.alphabet.length, B64.lookup = {}; ++b < c;) B64.lookup[B64.alphabet.charAt(b)] = b;
                    b = -1
                }
                for (c = a.length; ++b < c && (e[0] = B64.lookup[a.charAt(b)], e[1] = B64.lookup[a.charAt(++b)], d.push(e[0] << 2 | e[1] >> 4), e[2] = B64.lookup[a.charAt(++b)], 64 != e[2]) && (d.push((15 & e[1]) << 4 | e[2] >> 2), e[3] = B64.lookup[a.charAt(++b)], 64 != e[3]);) d.push((3 & e[2]) << 6 | e[3]);
                return d
            }
        };
        var replacer = function(finder, element, blackList, type = 1) {
            if (!finder) {
                return
            }

            var regex = (typeof finder == 'string') ? new RegExp(finder, 'g') : finder;
            var regex2 = (typeof finder == 'string') ? new RegExp(finder, 'g') : finder;

            var childNodes = element.childNodes;

            var len = childNodes.length;

            var list = typeof blackList == 'undefined' ? 'html,head,style,title,link,meta,script,object,iframe,pre,a,' : blackList;

            while (len--) {
                var node = childNodes[len];

                if (node.nodeType === 1 && true || (list.indexOf(node.nodeName.toLowerCase()) === -1)) {
                    replacer(finder, node, list, type);
                }
                if (node.nodeType !== 3 || !regex.test(node.data)) {
                    continue;
                }
                var frag = (function() {
                    var wrap = document.createElement('span');
                    var frag = document.createDocumentFragment();
                    var sliderId = regex2.exec(node.data)[1];
                    if (type == 1)
                        wrap.innerHTML = '<div class="storeifyapps-storelocator-shortcode" id="storeifyapps-storelocator-shortcode"></div>';
                    else
                        wrap.innerHTML = '<div class="storeifyapps-storelocator-short"></div>';
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
                //console.log(frag);       
                var parent = node.parentNode;
                parent.insertBefore(frag, node);
                parent.removeChild(node);
            }
        };

        var html_reponse_short = B64.decode(html_render_short);
        var storelocator_products_response = JSON.parse(B64.decode(products_render));
        var storelocator_tags_response = JSON.parse(B64.decode(tags_render));
        var storelocator_country = JSON.parse(B64.decode(array_country));
        var html_reponse = B64.decode(html_render);
        var html_list = JSON.parse(B64.decode(html_list_render));
        var gmarkers = [];
        var gmarker_show = [];
        var markers = [];
        var marker_search = null;
        var map;
        var infowindow;
        var bounds;
        var randomID = 'main-slider-storelocator';
        // var limit_store = 5000;
        // var list_mode = 0;
        // var search_mode = 0;
        //code here

        function initMap() {
            var script = document.createElement('script');
            script.src = window.geoson_url;
            document.getElementsByTagName('head')[0].appendChild(script);
            if(document.getElementById("loading_mask_loader"))
            {
                document.getElementById("loading_mask_loader").style.display = 'block';
            }
            if(document.getElementById("map") && !document.getElementById("storeify-detail-store")){
                locationDiv = document.getElementById("location");
                input = document.getElementById('address');
                var styledMapType = new google.maps.StyledMapType(JSON.parse(B64.decode(map_style_render)));
                map = new google.maps.Map(document.getElementById("map"), {
                    center: new google.maps.LatLng(center_lat, center_lng),
                    zoom: initial_zoom,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    streetViewControl: false,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    }
                });
                map.mapTypes.set('styled_map', styledMapType);
                map.setMapTypeId('styled_map');
                infowindow = new google.maps.InfoWindow();
                bounds = new google.maps.LatLngBounds();
                var searchBox = new google.maps.places.SearchBox(input);
                var tags_input = [];
                if (priority_search != 'global') {
                    const options = {
                        componentRestrictions: { country: priority_search },
                    };
                    const autocomplete = new google.maps.places.Autocomplete(input, options);
                }
                jQuery.each(jQuery('input.storeifyapp_stores_tags_filter:checked'), function() {
                    tags_input.push(jQuery(this).val());
                });
                var filter_country = 'all';
                if (jQuery('input.storeifyapp_stores_country_filter').length) {
                    filter_country = jQuery('input.storeifyapp_stores_country_filter:checked').val();                   
                }
                if(jQuery('.storeifyapp_stores_countrys_filter_list').data('tag') == 'select'){
                        filter_country = jQuery('select.storeifyapp_stores_country_filter').val();
                }
                
                if (locationDiv) locationDiv.innerHTML = '<div id="' + randomID + '" class="list-item-3"></div>';
                var tilesloaded = google.maps.event.addListener(map, "tilesloaded", function() {

                    jQuery('#' + randomID).html(html_list);
                    jQuery("#results-slt").show();
                    google.maps.event.removeListener(tilesloaded);
                });
            }

        }

        window.eqfeed_callback = function(results) {
            var thum = '';
            var count_marker = 0;
            var html_list = '';
            var params = [];

            for (var i = 0; i < results.features.length; i++) {
                var coords = results.features[i].geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var properties = results.features[i].properties;
                if (typeof properties.thumbnail !== 'undefined') {
                    thum = properties.thumbnail;
                }
                params.push({
                    country: properties.country,
                    city: properties.city,
                    tags: properties.tags,
                    web: properties.web,
                    email: properties.email,
                    phone: properties.phone,
                    thum: thum,
                    id: properties.id,
                    name: properties.name,
                    url: properties.url,
                    address: properties.address,
                    social: properties.social,
                    tags: properties.tags,
                });
                if(map){
	                if (list_mode != 1 || (list_mode == 1 && i < limit_store)) {
	                    var data_maker = {
	                        position: new google.maps.LatLng(coords[1], coords[0]),
	                        social: properties.social,
	                        country: properties.country,
	                        tags: properties.tags,
	                        web: properties.web,
	                        email: properties.email,
	                        phone: properties.phone,
	                        thum: thum,
	                        id: properties.id,
	                        name: properties.name,
	                        url: properties.url,
	                        address: properties.address,
	                        map: map,
	                        num: i,
	                        visible: true,

	                    };
	                    bounds.extend(latLng);
	                    count_marker++;
	                } else {
	                    var data_maker = {
	                        position: new google.maps.LatLng(coords[1], coords[0]),
	                        social: properties.social,
	                        country: properties.country,
	                        tags: properties.tags,
	                        web: properties.web,
	                        email: properties.email,
	                        phone: properties.phone,
	                        thum: thum,
	                        id: properties.id,
	                        name: properties.name,
	                        url: properties.url,
	                        address: properties.address,
	                        map: map,
	                        num: i,
	                        visible: false,

	                    };
	                }

                
                	var marker = createMarker(data_maker, map, infowindow);
                	gmarkers.push(marker);
                }
                
                //                 if(i > 10) marker.setVisible(true);
            }
            if(map){
	            if (count_marker > 1) {
	                jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('results'));
	            } else {
	                jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('result'));
	            }
	            document.getElementById("num-rs").innerHTML = count_marker;
	            if (list_mode == 2 || limit_store == 0) {
	                jQuery("#results-slt h3.title").hide();
	                jQuery("#main-slider-storelocator").addClass('storeify-first-alert');
	            }
	            if (list_mode == 2 || limit_store == 0) {
	                jQuery("#results-slt h3.title").hide();
	                jQuery("#main-slider-storelocator").removeClass('storeify-first-alert');
	            }
	            if (center_lat == 0 && center_lng == 0) {
	                map.fitBounds(bounds);
	            } else {
	                
	                map.setZoom(initial_zoom);
	                map.setCenter(new google.maps.LatLng(center_lat, center_lng));
	            }
	            document.getElementById("loading_mask_loader").style.display = 'none';
	            if(find_location == 1)
	            setTimeout(function loadLocationInit() {
	              loadGeolocationInit();
	            },1000);
	    	}
            if(shortcode_use == 1){
                var listCountry = new Shortcode(document.querySelector('body'), {
                  storeifyStorelocator: function() {
                    var country = this.options.country;
                    var city = this.options.city;
                    var class_text = 'storeify-list-country';
                    if(city){
                        class_text = 'storeify-list-city';
                    }
                    var htmlCountry = '<div class="'+class_text+'">';
                    jQuery.each(params, function( index, value ) {
                      if(country && value.country == country){
                        htmlCountry += '<div class="storeify-item-city">';
                        htmlCountry += '<div class="storelocator-title storeify-item-info"><a href="'+value.url+'">'+value.name+'</a></div>';
                        if (value.address != null) {
                            htmlCountry += '<div class="item-address storeify-item-info"><span class="material-icons-outlined">place</span><p>' + value.address + '</p></div>';
                        }
                        if (value.email != null) {
                            htmlCountry += '<div class="item-envelope storeify-item-info"><span class="material-icons-outlined">email</span>';
                            htmlCountry += '<a href="mailto:' + value.email + '" class="phone-email">' + value.email + '</a></div>';
                        }
                        if (value.phone != null) {
                            htmlCountry += '<div class="item-phone storeify-item-info"><span class="material-icons-outlined">phone</span>';
                            htmlCountry += '<a href="tel:' + value.phone + '" class="phone-no">' + value.phone + '</a></div>';
                        }
                        if (value.web != null) {
                            htmlCountry += '<div class="item-link storeify-item-info"><span class="material-icons-outlined">link</span>';
                            htmlCountry += value.web + '</div>';
                        }
                        if (value.tags.length > 0) {
                            var tag_arr = value.tags;
                            var tag_html = '';
                            jQuery.each(tag_arr, function(i, val) {
                                tag_html += '<span class="tag-item"><i class="fa fa-check" aria-hidden="true"></i> ' + val + '</span>';
                            });
                            htmlCountry += '<div class="item-tags storeify-item-info"><span class="material-icons-outlined">label</span> ' + tag_html +'</div>';
                        }
                        if (value.social != null && typeof value.social != 'undefined' && value.social != '') {
                            htmlCountry += '<div class="storeify-storelocator-social-maker"><span class="material-icons-outlined">share</span> ' + value.social + '</div>';
                        }
                        htmlCountry += '</div>';
                      }
                        
                      if(city && value.city == city){
                        htmlCountry += '<div class="storeify-item-city">';
                        htmlCountry += '<div class="storelocator-title storeify-item-info"><a href="'+value.url+'">'+value.name+'</a></div>';
                        if (value.address != null) {
                            htmlCountry += '<div class="item-address storeify-item-info"><span class="material-icons-outlined">place</span><p>' + value.address + '</p></div>';
                        }
                        if (value.email != null) {
                            htmlCountry += '<div class="item-envelope storeify-item-info"><span class="material-icons-outlined">email</span>';
                            htmlCountry += '<a href="mailto:' + value.email + '" class="phone-email">' + value.email + '</a></div>';
                        }
                        if (value.phone != null) {
                            htmlCountry += '<div class="item-phone storeify-item-info"><span class="material-icons-outlined">phone</span>';
                            htmlCountry += '<a href="tel:' + value.phone + '" class="phone-no">' + value.phone + '</a></div>';
                        }
                        if (value.web != null) {
                            htmlCountry += '<div class="item-link storeify-item-info"><span class="material-icons-outlined">link</span>';
                            htmlCountry += value.web + '</div>';
                        }
                        if (value.tags.length > 0) {
                            var tag_arr = value.tags;
                            var tag_html = '';
                            jQuery.each(tag_arr, function(i, val) {
                                tag_html += '<span class="tag-item"><i class="fa fa-check" aria-hidden="true"></i> ' + val + '</span>';
                            });
                            htmlCountry += '<div class="item-tags storeify-item-info"><span class="material-icons-outlined">label</span> ' + tag_html +'</div>';
                        }
                        if (value.social != null && typeof value.social != 'undefined' && value.social != '') {
                            htmlCountry += '<div class="storeify-storelocator-social-maker"><span class="material-icons-outlined">share</span> ' + value.social + '</div>';
                        }
                        htmlCountry += '</div>';
                      }
                          
                    });
                    htmlCountry +='</div>';
                    //return this.options.text;
                    return htmlCountry;
                  }
                });
            }

        }

        function createMarker(data_maker, map, infowindow) {
            var html = '';
            html += '<div class="store-marker" style="max-width:400px">';
            html += '<div class="address-info"><div class="table-store-marker">';
            html += '<div class="row">';
            html += '<label class="col-md-12 store-name">' + data_maker.name + '</label>';
            if (data_maker.thum) {
                html += '<div class="col-md-4 store-image"><img src="' + data_maker.thum + '"></div>';
                html += '<div class="col-md-8">';
            } else
                html += '<div class="col-md-12">';
            //html += '<tr><td><strong>' + trans['address'] + ':</strong></td><td><p>' + address + '</p></td></tr>';
            html += '<p><span class="material-icons-outlined">place</span> ' + data_maker.address + '</p>';

            if (data_maker.email != null) {
                html += '<p class="marker-envelope"><span class="material-icons-outlined">email</span> <a href="mailto:' + data_maker.email + '">' + data_maker.email + '</a></p>';
            }
            if (data_maker.phone != null) {
                html += '<p class="marker-phone"><span class="material-icons-outlined">phone</span> <a href="tel:' + data_maker.phone + '">' + data_maker.phone + '</a></p>';
            }
            if (data_maker.web != null) {
                html += '<p class="marker-link"><span class="material-icons-outlined">link</span> ' + data_maker.web + '</p>';
            }
            if (data_maker.tags.length > 0) {
                //html += '<label>' + trans['web'] + ': </label>';
                var tag_arr = data_maker.tags;
                var tag_html = '';
                jQuery.each(tag_arr, function(key, value) {
                    tag_html += '<span class="tag-item"><i class="fa fa-check" aria-hidden="true"></i> ' + value + '</span>';
                });
                html += '<p><span class="material-icons-outlined">label</span> ' + tag_html + '</p>';
            }
            if (data_maker.social != null && typeof data_maker.social != 'undefined' && data_maker.social != '') {
                html += '<div class="storeify-storelocator-social-maker"><span class="material-icons-outlined">share</span> ' + data_maker.social + '</div>';
            }
            if (data_maker.url != null) {
                html += '<a class="linkdetailstore" href="' + data_maker.url + '">' + trans['link_detail'] + ' <span class="material-icons-outlined">trending_flat</span></a>';
            }
            html += '<a class="getdirectionstore" href="https://maps.google.com/?daddr=' + data_maker.address + '&saddr=" target="_blank">' + trans['getdirection'] + ' <span class="material-icons-outlined">trending_flat</span></a></div></div>';
            html += '<div id="' + data_maker.id + '"></div>';
            html += '</div></div></div></div>';
            var marker = new google.maps.Marker(data_maker);
            if(window.icon_marker != ''){
                var icon = {
                  url: window.icon_marker, // url
                  scaledSize: new google.maps.Size(40, 40), // scaled size
                  // origin: new google.maps.Point(0,0), // origin
                  // anchor: new google.maps.Point(0, 0) // anchor
                };
                marker.setIcon(icon);
            }
            else{
                var icon = {
                  url: 'https://sl.storeify.app/images/frontend/default-mark-icon.png',
                  scaledSize: new google.maps.Size(40, 40), // scaled size
                  // origin: new google.maps.Point(0,0), // origin
                  // anchor: new google.maps.Point(0, 0) // anchor
                };
                marker.setIcon(icon);
            }
            google.maps.event.addListener(marker, 'click', function(evt) { // the click event function is called with the "event" as an argument
                if(jQuery('.chose-search-slt').val() == 'location'){
                    address = jQuery('#address').val();
                    html = html.replace("saddr=", "saddr="+address);
                }
                showInfoWindow(evt, this, map, infowindow, html);
            });
            return marker;
        }

        function showInfoWindow(evt, marker, map, infowindow, html) {
            map.panTo(marker.getPosition());
            if (marker.getVisible() && (marker.getMap() != null)) {
                infowindow.setContent(html);
                infowindow.open(map, marker);
            } else {
                infowindow.setContent(html);
                infowindow.setPosition(marker.getPosition());
                infowindow.open(map);
                google.maps.event.addListenerOnce(map, 'idle', function() {
                    infowindow.setContent(html);
                    infowindow.open(map, marker);
                });
            }
        }

        function degreesToRadians(degrees) {
            return degrees * Math.PI / 180;
        }

        function getDistanceBetweenPoints(lat1, lng1, lat2, lng2) {
            // The radius of the planet earth in meters
            let R = 6378137;
            let dLat = degreesToRadians(lat2 - lat1);
            let dLong = degreesToRadians(lng2 - lng1);
            let a = Math.sin(dLat / 2) *
                Math.sin(dLat / 2) +
                Math.cos(degreesToRadians(lat1)) *
                Math.cos(degreesToRadians(lat1)) *
                Math.sin(dLong / 2) *
                Math.sin(dLong / 2);

            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            let distance = R * c;

            return distance;
        }

        function superbag(sup, sub) {
            if (sup.length < sub.length)
                return false;
            sup.sort();
            sub.sort();
            var i, j;
            for (i = 0, j = 0; i < sup.length && j < sub.length;) {

                if (sup[i] < sub[j]) {
                    ++i;
                } else if (sup[i] == sub[j]) {
                    ++i;
                    ++j;
                } else {
                    // sub[j] not in sup, so sub not subbag
                    return false;
                }
            }
            // make sure there are no elements left in sub

            if (j < sub.length)
                return false;
            else
                return true;

        }

        function diff(arr1, arr2) {
                var filteredArr1 = arr1.filter(function(ele) {
                    return arr2.indexOf(ele) == -1;
                });

                var filteredArr2 = arr2.filter(function(ele) {
                    return arr1.indexOf(ele) == -1;
                });
                // console.log(filteredArr1);
                // console.log(filteredArr2);
                return filteredArr1.concat(filteredArr2);
            }
            /*
        function checkDistanceBetweenPoints(lat1, lng1, lat2, lng2, radius, dv = 0.001){
            var check = -1;
            if(getDistanceBetweenPoints(lat1, lng1, lat2, lng2)*dv <= radius )
              check = getDistanceBetweenPoints(lat1, lng1, lat2, lng2)*dv;
            return check;
        }*/
            /*Fix for IE*/
        function checkDistanceBetweenPoints(lat1, lng1, lat2, lng2, radius) {
                var dv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.001;
                var check = -1;
                if (getDistanceBetweenPoints(lat1, lng1, lat2, lng2) * dv <= radius)
                    check = getDistanceBetweenPoints(lat1, lng1, lat2, lng2) * dv;
                return check;
            }
            /**/
        function checkTag(tag, tags) {
            var check = 0;

            if (tag.length == 0 || superbag(tags, tag) == true)
                check = 1;
            return check;
        }

        function addAnalytic(resultGeo,count){
            var url = app_url_config+'/add-analytic';
            var data = {
              'lat':resultGeo.geometry.location.lat(),
              'lng':resultGeo.geometry.location.lng(),
              'result':resultGeo.address_components,
              'address':resultGeo.formatted_address,
              'count':count,
              'domain':Shopify.shop,
            };
            jQuery.ajax({
                url: url,
                type: "post",
                data: data,
                cache: false,
                dataType: "json",
            }).done(function(data) {
               
            }).fail(function() {
                
            });
        }

        function searchLocationsNear(resultGeo, map, bounds, gmarkers,search) {
            var radius = document.getElementById('radius_search').value;
            var center = resultGeo.geometry.location;
            bounds = new google.maps.LatLngBounds();
            //var searchUrl = baseurl + 'all/ajax?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius + '&shop=' + Shopify.shop;
            var searchUrl = '/a/store-locator/all/ajax'; //?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius + '&radius=' + Shopify.shop;
            var tags_check = [];
            jQuery.each(jQuery('input.storeifyapp_stores_tags_filter:checked'), function() {
                tags_check.push(jQuery(this).val());
            });
            var filter_country = 'all';
            if (jQuery('input.storeifyapp_stores_country_filter').length) {
                filter_country = jQuery('input.storeifyapp_stores_country_filter:checked').val();
            }
            if(jQuery('.storeifyapp_stores_countrys_filter_list').data('tag') == 'select'){
                    filter_country = jQuery('select.storeifyapp_stores_country_filter').val();
            }
            var check_country = 0;
            var data = {
                lat: center.lat(),
                lng: center.lng(),
                radius: radius,
                shop: Shopify.shop,
                tags: tags_check.join(',')
            };
            var marker_count = 0;
            var marker_first;
            var dv = 1;
            if (radius_unit == 1) {
                dv = 0.001;
            } else {
                dv = 0.00062137;
            }
            var array_poin = [];
            for (var i = 0; i < gmarkers.length; i++) {
                // console.log( markerNodes[i]['tags'] );
                marker = gmarkers[i];
                var distance = checkDistanceBetweenPoints(center.lat(), center.lng(), marker.position.lat(), marker.position.lng(), radius, dv);
                check_country = 0;
                if (filter_country == 'all' || filter_country == marker.country) {
                    check_country = 1;
                }
                if (distance > -1 && checkTag(tags_check, marker.tags) && check_country == 1) {
                    thum = null;
                    if (typeof marker.thum !== 'undefined') {
                        thum = marker.thum;
                    }
                    var id = marker.id;
                    var name = marker.name;
                    var url = marker.url;
                    var address = marker.address;
                    var phone = marker.phone;
                    var email = marker.email;
                    var web = marker.web;
                    var tags = marker.tags;
                    var social = marker.social;
                    var num = marker.num;
                    array_poin[i] = {
                        social: social,
                        thum: thum,
                        id: id,
                        name: name,
                        url: url,
                        address: address,
                        phone: phone,
                        email: email,
                        web: web,
                        distance: distance,
                        tags: tags,
                        marker_count: marker_count,
                        num: num
                    };
                    marker.setVisible(true);
                    marker_first = marker;
                    marker_count++;
                    bounds.extend(marker.getPosition());
                } else {
                    marker.setVisible(false);
                }
            }

            map.fitBounds(bounds);
            document.getElementById("num-rs").innerHTML = marker_count;
            //jQuery("#results-slt h3.title").show();
            jQuery("#main-slider-storelocator").removeClass('storeify-first-alert');
            if (marker_count > 0) {
                array_poin = array_poin.sort(function(a, b) {
                    return a.distance - b.distance;
                });
                var html_list = '';
                for (var i = 0; i < marker_count; i++) {
                    html_list += listItem(array_poin[i].social, array_poin[i].thum, array_poin[i].id, array_poin[i].name, array_poin[i].url, array_poin[i].address, array_poin[i].phone, array_poin[i].email, array_poin[i].web, array_poin[i].distance, array_poin[i].tags, array_poin[i].num,search);
                }
                if(marker_count == 1){
                    map.setCenter(marker_first.getPosition());
                    map.setZoom(search_result_zoom);
                }else{
                    var zoom = map.getZoom();
                    zoom = Math.min(zoom, 12);
                    map.setZoom(zoom);
                }
                jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('results'));
                jQuery('#' + randomID).html(html_list);
            }
            if (marker_count == 0) {
                
                map.setZoom(search_result_zoom);
                map.setCenter(new google.maps.LatLng(center.lat(), center.lng()));
                
                document.getElementById("loading_mask_loader").style.display = 'none';

                document.getElementById("results-slt").style.display = 'none';
                var address = document.getElementById("address").value;
                //alert(trans['store_near'] + address); //"store_near"
                jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('result'));
                jQuery('#results-empty').html('<h5 class="alert alert-danger">' + trans['store_near'] + ' <i>"' + address + '"</i></h5>');
                addAnalytic(resultGeo,marker_count);
                return;
            }

            jQuery('#results-empty').html('<h5></h5>');
            document.getElementById("results-slt").style.display = 'block';
            var thum = '';


            // map.fitBounds(bounds);
            // var zoom = map.getZoom();
            // zoom = Math.min(zoom, 12);
            // jQuery(".map-tab-mobile-bnt-item").attr("data-zoom",zoom);
            // map.setZoom(zoom);
            document.getElementById("loading_mask_loader").style.display = 'none';
            addAnalytic(resultGeo,marker_count);

        }
        function searchLocationsNearShort(resultGeo) {
          if (marker_search != null) marker_search.setMap(null);
          var center = resultGeo.geometry.location;
          if(infowindow) infowindow.close();
          var radius = document.getElementById('radius_search').value;
          //var searchUrl = baseurl + 'all/ajax?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius + '&shop=' + Shopify.shop;
          var searchUrl = '/a/store-locator/all/ajax';//?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius + '&radius=' + Shopify.shop;
          var tags_check = [];
          var filter_country = 'all';
          var check_country = 0;
          var data = {lat:center.lat(),lng:center.lng(),radius:radius,shop: Shopify.shop,tags:tags_check.join(',')};
            var marker_count = 0;
            var dv = 1;
            if(radius_unit == 1 ){
                dv = 0.001; 
            }else{
                dv= 0.00062137;
            }
            var array_poin = [];
            for (var i = 0; i < gmarkers.length; i++) {
                marker = gmarkers[i];
                var distance = checkDistanceBetweenPoints(center.lat(), center.lng(), marker.position.lat(), marker.position.lng(), radius, dv);
                check_country = 0;
                if (filter_country == 'all' || filter_country == marker.country) {
                    check_country = 1;
                }
                if (distance > -1 && checkTag(tags_check, marker.tags) && check_country == 1) {
                    thum = null;
                    if (typeof marker.thum !== 'undefined') {
                        thum = marker.thum;
                    }
                    var id = marker.id;
                    var name = marker.name;
                    var url = marker.url;
                    var address = marker.address;
                    var phone = marker.phone;
                    var email = marker.email;
                    var web = marker.web;
                    var tags = marker.tags;
                    var social = marker.social;
                    var num = marker.num;
                    array_poin[i] = {
                        social: social,
                        thum: thum,
                        id: id,
                        name: name,
                        url: url,
                        address: address,
                        phone: phone,
                        email: email,
                        web: web,
                        distance: distance,
                        tags: tags,
                        marker_count: marker_count,
                        num: num
                    };
                    marker.setVisible(true);
                    marker_count++;
                } else {
                    marker.setVisible(false);
                }
            }

            // markerCluster.setIgnoreHidden(true);
            // markerCluster.repaint();
            // markerCluster.fitMapToMarkers();

            document.getElementById("storeify-storeloctor-contactFrm").style.display = 'block';
            document.getElementById("loading_mask_loader").style.display = 'none';
            if(marker_count > 0 ){
                array_poin = array_poin.sort(function (a, b) {
                return a.distance - b.distance ;
                });
                var html_list='';
                for (var i = 0; i < marker_count; i++) {
                    html_list += listItem(array_poin[i].social, array_poin[i].thum, array_poin[i].id, array_poin[i].name, array_poin[i].url, array_poin[i].address, array_poin[i].phone, array_poin[i].email, array_poin[i].web, array_poin[i].distance, array_poin[i].tags, array_poin[i].num);
                }
                document.getElementById("num-rs").innerHTML = marker_count;
                jQuery('#results-slt .list-custo-storeify').html(html_list);
            }else{
              document.getElementById("num-rs").innerHTML = marker_count;
              jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('result'));
              jQuery('#results-slt .list-custo-storeify').html('');
              jQuery('#results-empty').html('<h5 class="alert alert-danger">'+trans['store_near'] +'<i>"'+ address+'"</i></h5>');
            }
          

        }
        function searchStoresByName() {
            if (marker_search != null) marker_search.setMap(null);
            if(infowindow) infowindow.close();
            bounds = new google.maps.LatLngBounds();
            document.getElementById("loading_mask_loader").style.display = '';
            jQuery('.content-results-slt').removeClass('content-results-first');
            var search_text = document.getElementById("store_search").value;
            var tags = [];
            jQuery.each(jQuery('input.storeifyapp_stores_tags_filter:checked'), function() {
                tags.push(jQuery(this).val());
            });
            var filter_country = jQuery('input.storeifyapp_stores_country_filter:checked').val();
            if(jQuery('.storeifyapp_stores_countrys_filter_list').data('tag') == 'select'){
                filter_country = jQuery('select.storeifyapp_stores_country_filter').val();
            }
            var data = {
                name: search_text,
                shop: Shopify.shop,
                tags: tags.join(','),
                country: filter_country,
                v: 2
            };
            var searchUrl = '/a/store-locator/searchbyname'; //?name=' + search_text + '&shop=' + Shopify.shop;
            jQuery.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': jQuery('input[name="_token"]').val()
                }
            });
            jQuery.ajax({
                url: searchUrl,
                type: "GET",
                data: data,
                cache: false,
                dataType: "json",
            }).done(function(data) {

                var markerNodes = data.data;

                if (markerNodes.length == 0) {

                    document.getElementById("loading_mask_loader").style.display = 'none';
                    document.getElementById("results-slt").style.display = 'none';
                    var query_search = document.getElementById("store_search").value;
                    jQuery('#results-empty').html('<h5 class="alert alert-danger">' + trans['no_store_name'] + ' <i>"' + query_search + '"</i></h5>');

                    return;
                }
                document.getElementById("results-slt").style.display = 'block';
                var thum = '';
                if (markerNodes.length > 1) {
                    jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('results'));
                } else {
                    jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('result'));
                }
                document.getElementById("num-rs").innerHTML = markerNodes.length;
                //jQuery("#results-slt h3.title").show();
                jQuery("#main-slider-storelocator").removeClass('storeify-first-alert');
                var html_list = '';
                var marker_count = 0;
                var marker_first;
                for (var i = 0; i < gmarkers.length; i++) {
                    // console.log( markerNodes[i]['tags'] );
                    marker = gmarkers[i];
                    var id = marker.id;
                    if (markerNodes.includes(id)) {
                        thum = null;
                        if (typeof marker.thum !== 'undefined') {
                            thum = marker.thum;
                        }
                        var name = marker.name;
                        var url = marker.url;
                        var address = marker.address;
                        var phone = marker.phone;
                        var email = marker.email;
                        var web = marker.web;
                        var tags = marker.tags;
                        var social = marker.social;
                        var num = marker.num;
                        marker.setVisible(true);
                        marker_first = marker;
                        bounds.extend(marker.getPosition());
                        marker_count++;
                        html_list += listItem(social, thum, id, name, url, address, phone, email, web, null, tags, num);
                    } else {
                        marker.setVisible(false);
                    }
                }

                map.fitBounds(bounds);
                var zoom = map.getZoom();
                zoom = Math.min(zoom, 12);
                if(marker_count == 1){
                    map.setCenter(marker_first.getPosition());
                    map.setZoom(search_result_zoom);
                }else{
                    map.setZoom(zoom);
                }
                jQuery(".map-tab-mobile-bnt-item").attr("data-zoom", zoom);
                jQuery('#' + randomID).html(html_list);
                document.getElementById("loading_mask_loader").style.display = 'none';

            }).fail(function() {
                window.location.href = '/';
            });
            // }        
            return true;
        }

        function searchStoresByProducts() {
            if (marker_search != null) marker_search.setMap(null);
            if(infowindow) infowindow.close();
            bounds = new google.maps.LatLngBounds();
            document.getElementById("loading_mask_loader").style.display = '';
            jQuery('.content-results-slt').removeClass('content-results-first');
            var search_text = document.getElementById("product_search").value;
            var tags = [];
            jQuery.each(jQuery('input.storeifyapp_stores_tags_filter:checked'), function() {
                tags.push(jQuery(this).val());
            });
            var filter_country = jQuery('input.storeifyapp_stores_country_filter:checked').val();
            if(jQuery('.storeifyapp_stores_countrys_filter_list').data('tag') == 'select'){
                filter_country = jQuery('select.storeifyapp_stores_country_filter').val();
            }
            var data = {
                name: search_text,
                shop: Shopify.shop,
                tags: tags.join(','),
                country: filter_country,
                v: 2
            };

            var searchUrl = '/a/store-locator/searchproduct'; //?name=' + search_text + '&shop=' + Shopify.shop;
            jQuery.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': jQuery('input[name="_token"]').val()
                }
            });
            jQuery.ajax({
                url: searchUrl,
                type: "GET",
                data: data,
                cache: false,
                dataType: "json",
            }).done(function(data) {

                var markerNodes = data.data;

                if (markerNodes.length == 0) {

                    document.getElementById("loading_mask_loader").style.display = 'none';
                    document.getElementById("results-slt").style.display = 'none';
                    var query_search = document.getElementById("product_search").value;
                    jQuery('#results-empty').html('<h5 class="alert alert-danger">' + trans['no_store_product'] + ' <i>"' + query_search + '"</i></h5>');

                    return;
                }
                document.getElementById("results-slt").style.display = 'block';
                var thum = '';
                if (markerNodes.length > 1) {
                    jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('results'));
                } else {
                    jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('result'));
                }
                document.getElementById("num-rs").innerHTML = markerNodes.length;
                //jQuery("#results-slt h3.title").show();
                jQuery("#main-slider-storelocator").removeClass('storeify-first-alert');
                var html_list = '';
                var marker_first;
                var marker_count = 0;
                for (var i = 0; i < gmarkers.length; i++) {
                    // console.log( markerNodes[i]['tags'] );
                    marker = gmarkers[i];
                    var id = marker.id;
                    if (markerNodes.includes(id)) {
                        thum = null;
                        if (typeof marker.thum !== 'undefined') {
                            thum = marker.thum;
                        }
                        var name = marker.name;
                        var url = marker.url;
                        var address = marker.address;
                        var phone = marker.phone;
                        var email = marker.email;
                        var web = marker.web;
                        var tags = marker.tags;
                        var social = marker.social;
                        var num = marker.num;
                        marker.setVisible(true);
                        marker_first = marker;
                        marker_count++;
                        bounds.extend(marker.getPosition());
                        html_list += listItem(social, thum, id, name, url, address, phone, email, web, null, tags, num);
                    } else {
                        marker.setVisible(false);
                    }
                }

                map.fitBounds(bounds);
                var zoom = map.getZoom();
                zoom = Math.min(zoom, 12);
                if(marker_count == 1){
                    map.setCenter(marker_first.getPosition());
                    map.setZoom(search_result_zoom);
                }else{
                    map.setZoom(zoom);
                }
                jQuery(".map-tab-mobile-bnt-item").attr("data-zoom", zoom);
                jQuery('#' + randomID).html(html_list);
                document.getElementById("loading_mask_loader").style.display = 'none';

            }).fail(function() {
                window.location.href = '/';
            });
            // }        
            return true;
        }

        function onMouseover(markerNum) {
            var currentIcon = gmarkers[markerNum];
            currentIcon.setAnimation(null);

            if (currentIcon.getAnimation() != null) {
                currentIcon.setAnimation(null);
            } else {
                currentIcon.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    currentIcon.setAnimation(null);
                }, 500);
            }
        }

        function onMouseout(markerNum) {
            gmarkers[markerNum].setAnimation(null);
        }

        function listItem(social, thum, id, name, url, address, phone, email, web, distance, tags, num, search) {
            var att = '';
            if (typeof distance !== 'undefined') {
                att = 'datamarker="' + num + '"';
            }

            var html = '<div class="item thumbnail" ' + att + '><div class="inner-item" id="store_id_' + num + '">';
            if (thum) {
                html += '<div class="item-thumb"><img title="" src="' + thum + '"></div>';
            } else {
                html += '<div class="item-thumb"><span class="material-icons-outlined align-middle" style="font-size: 48px;">pin_drop</span></div>';
            }
            html += '<div class="item-content"><label class="store-name"><strong>' + name + '</strong></label>';
            // element.innerHTML += '<div class="clear"></div>';
            html += '<div class="address"><span class="material-icons-outlined">place</span>' + address + '</div>';
            if (distance) {
                //html += '<label>' + trans['web'] + ': </label>';
                var radius_unit_text = ' Km';
                if (radius_unit != 1)
                    radius_unit_text = ' mi';
                html += '<div class="item-road"><span class="material-icons-outlined">settings_ethernet</span>';
                html += distance.toFixed(2) + radius_unit_text + '<br/></div>';
            }
            if (email != null) {
                //html += '<label>' + trans['email'] + ': </label>';
                html += '<div class="item-envelope"><span class="material-icons-outlined">email</span>';
                html += '<a href="mailto:' + email + '" class="phone-email">' + email + '</a><br/></div>';
            }
            if (phone != null) {
                //html += '<label>' + trans['phone'] + ': </label>';
                html += '<div class="item-phone"><span class="material-icons-outlined">phone</span>';
                html += '<a href="tel:' + phone + '" class="phone-no">' + phone + '</a><br/></div>';
            }
            if (web != null) {
                //html += '<label>' + trans['web'] + ': </label>';
                html += '<div class="item-link"><span class="material-icons-outlined">link</span>';
                html += web + '<br/></div>';
            }
            if (tags.length > 0) {
                var tag_arr = tags;
                var tag_html = '';
                jQuery.each(tag_arr, function(key, value) {
                    tag_html += '<span class="tag-item"><i class="fa fa-check" aria-hidden="true"></i> ' + value + '</span>';
                });
                html += '<span class="material-icons-outlined">label</span> ' + tag_html + '<br/>';
            }
            if (social != null && typeof social != 'undefined' && social != '') {
                html += '<div class="storeify-storelocator-social-maker"><span class="material-icons-outlined">share</span> ' + social + '</div>';
            }

            //"link_detail"
            if (url != null) {
                html += '<a class="linkdetailstore" href="' + url + '">' + trans['link_detail'] + ' <span class="material-icons-outlined">trending_flat</span></a>';
            }
            html += '<a class="getdirectionstore" href="https://maps.google.com/?daddr=' + address + '&saddr='+search+'" target="_blank">' + trans['getdirection'] + ' <span class="material-icons-outlined">trending_flat</span></a></div></div>';
            html += '</div></div>';
            return html;
        }

        function loadGeolocation() {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    geocoder.geocode({
                        'latLng': latlng
                    }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                document.getElementById('address').value = results[1].formatted_address;
                            } else {
                                //alert(trans['no_result']); //"no_result"
                                jQuery('#results-empty').html('<h5 class="alert alert-danger">' + trans['no_result'] + '</h5>');
                            }
                        } else {
                            //alert(trans['geocoder_failed'] + status); //"geocoder_failed"
                            jQuery('#results-empty').html('<h5 class="alert alert-danger">' + trans['geocoder_failed'] + '</h5>');
                        }

                    }.bind(this));

                    // document.getElementById("latitude").value = position.coords.latitude;

                    //            document.getElementById("longitude").value = position.coords.longitude;

                }.bind(this), function(error) {}.bind(this));
            }

        }
        function loadGeolocationInit() {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    geocoder.geocode({
                        'latLng': latlng
                    }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                document.getElementById('address').value = results[1].formatted_address;
                                jQuery('#submit-search').trigger( "click" );
                            } else {
                                //alert(trans['no_result']); //"no_result"
                                jQuery('#results-empty').html('<h5 class="alert alert-danger">' + trans['no_result'] + '</h5>');
                            }
                        } else {
                            //alert(trans['geocoder_failed'] + status); //"geocoder_failed"
                            jQuery('#results-empty').html('<h5 class="alert alert-danger">' + trans['geocoder_failed'] + '</h5>');
                        }

                    }.bind(this));

                    // document.getElementById("latitude").value = position.coords.latitude;

                    //            document.getElementById("longitude").value = position.coords.longitude;

                }.bind(this), function(error) {}.bind(this));
            }

        }

        function loadGeolocationCountry() {
            navigator.geolocation.getCurrentPosition(function(position) {
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                geocoder.geocode({
                    'latLng': latlng
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            var loc = getCountry(results);
                            searchLocation(loc);
                        }
                    }
                });
            });
            searchLocation(null);
        }

        function getCountry(results) {
            for (var i = 0; i < results[0].address_components.length; i++) {
                var shortname = results[0].address_components[i].short_name;
                var longname = results[0].address_components[i].long_name;
                var type = results[0].address_components[i].types;
                if (type.indexOf("country") != -1) {
                    if (!isNullOrWhitespace(shortname)) {
                        return shortname;
                    } else {
                        return longname;
                    }
                }
            }
            return null;

        }

        function isNullOrWhitespace(text) {
            if (text == null) {
                return true;
            }
            return text.replace(/\s/gi, '').length < 1;
        }

        function searchLocation(currentCountry = null) {
            if (marker_search != null) marker_search.setMap(null);
            if(infowindow) infowindow.close();
            document.getElementById("loading_mask_loader").style.display = '';
            jQuery('.content-results-slt').removeClass('content-results-first');
            var address = document.getElementById("address").value;
            var radius_search = document.getElementById("radius_search").value;

            var checkboxes = document.getElementsByName('stores_tags_filter[]');
            var vals = "";
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                if (checkboxes[i].checked) {
                    vals += "," + checkboxes[i].value;
                }
            }
            if ((address == '' || address == null) && vals == "") {
                //alert(trans['please_enter']);
                jQuery('#address').focus();
                document.getElementById("loading_mask_loader").style.display = 'none';
                return false;
            }
            if ((radius_search == '' || radius_search == null) && vals == "") {
                //alert('Please enter a radius.');
                document.getElementById("loading_mask_loader").style.display = 'none';
                return false;
            }
            var focus_country = {
                address: address
            };
            if (currentCountry != null) {
                focus_country = {
                    address: address,
                    componentRestrictions: {
                        country: currentCountry,
                    }
                };
            }
            if (priority_search != 'global') {
                focus_country = {
                    address: address,
                    componentRestrictions: {
                        country: priority_search,
                    }
                };
            }
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode(focus_country, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                    marker_search = new google.maps.Marker({
                        map: map,
                        position: latlng,
                        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|6fba33'
                    });
                    google.maps.event.addListener(marker_search, 'click', function(evt) { // the click event function is called with the "event" as an argument
                        showInfoWindow(evt, this, map, infowindow, address);
                    });
                    //                         markers.push(marker);
                    searchLocationsNear(results[0], map, bounds, gmarkers,address)
                        //            searchLocationsNear(results[0].geometry.location);
                } else {
                    if (currentCountry == null) {
                        document.getElementById("loading_mask_loader").style.display = 'none';
                        jQuery('#results-empty').html('<h5 class="alert alert-danger"><i>' + address + '</i>' + trans['address_null'] + '</h5>');
                    } else {
                        searchLocation(null);
                    }

                }

            });
        }

        function findbyTags() {

                if (marker_search != null) marker_search.setMap(null);
                if(infowindow) infowindow.close();
                bounds = new google.maps.LatLngBounds();
                var tags_check = [];
                jQuery.each(jQuery('input.storeifyapp_stores_tags_filter:checked'), function() {
                    tags_check.push(jQuery(this).val());
                });
                var filter_country = 'all';
                if (jQuery('input.storeifyapp_stores_country_filter').length) {
                    filter_country = jQuery('input.storeifyapp_stores_country_filter:checked').val();
                }
                if(jQuery('.storeifyapp_stores_countrys_filter_list').data('tag') == 'select'){
                        filter_country = jQuery('select.storeifyapp_stores_country_filter').val();
                }
                var check_country = 0;
                var marker_first;
                var marker_count = 0;
                var array_poin = [];
                var html_list = '';
                for (var i = 0; i < gmarkers.length; i++) {
                    // console.log( markerNodes[i]['tags'] );
                    marker = gmarkers[i];
                    check_country = 0;
                    if (filter_country == 'all' || filter_country == marker.country) {
                        check_country = 1;
                    }
                    if (checkTag(tags_check, marker.tags) && check_country == 1) {
                        thum = null;
                        if (typeof marker.thum !== 'undefined') {
                            thum = marker.thum;
                        }
                        var id = marker.id;
                        var name = marker.name;
                        var url = marker.url;
                        var address = marker.address;
                        var phone = marker.phone;
                        var email = marker.email;
                        var web = marker.web;
                        var tags = marker.tags;
                        var social = marker.social;
                        var num = marker.num;
                        bounds.extend(marker.getPosition());
                        marker.setVisible(true);
                        marker_first = marker;
                        marker_count++;
                        html_list += listItem(social, thum, id, name, url, address, phone, email, web, null, tags, num);
                    } else {
                        marker.setVisible(false);
                    }
                }
                map.fitBounds(bounds);
                document.getElementById("loading_mask_loader").style.display = 'none';
                document.getElementById("num-rs").innerHTML = marker_count;
                //jQuery("#results-slt h3.title").show();
                jQuery("#main-slider-storelocator").removeClass('storeify-first-alert');
                if (marker_count > 0) {
                    if(marker_count == 1){
                        map.setCenter(marker_first.getPosition());
                        map.setZoom(search_result_zoom);
                    }else{
                        var zoom = map.getZoom();
                        zoom = Math.min(zoom, 12);
                        map.setZoom(zoom);
                    }
                    jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('results'));
                    jQuery('#' + randomID).html(html_list);
                }
                if (marker_count == 0) {

                    document.getElementById("results-slt").style.display = 'none';
                    var address = document.getElementById("address").value;
                    jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('result'));
                    jQuery('#results-empty').html('<h5 class="alert alert-danger">' + trans['store_near'] + '<i>"' + address + '"</i></h5>');
                    return;
                }

                jQuery('#results-empty').html('<h5></h5>');
                document.getElementById("results-slt").style.display = 'block';
            }
            //---------//end code here
        var blackList;
        jQuery('body').each(function() {
            replacer('\\[storeify-storelocator\\]', jQuery(this).get(0), blackList, 1);
            replacer('\\[storeify-storelocator-short\\]', jQuery(this).get(0), blackList, 2);
        });
        jQuery('#storeifyapps-storelocator-shortcode').html(html_reponse);
        if (jQuery('.storeifyapps-storelocator-short').length) {
            jQuery('.storeifyapps-storelocator-short').html(html_reponse_short);
        }
        jQuery('#tags').html(storelocator_tags_response);
        jQuery('#country_html').html(storelocator_country);
        if(storelocator_tags_response == '' && jQuery('#stores-country-filter').length <= 0 ){
          jQuery('#btn-filter').hide();
        }
        if (jQuery('.storeifyapps-storelocator-equal').length) {
            jQuery('#frm-storelocator-search #map').css("height", (jQuery('.storeify-sear-box').outerHeight() + 540) + "px");
        }
        if (list_mode == 2 || limit_store == 0) {
            jQuery("#results-slt h3.title").hide();
            jQuery("#main-slider-storelocator").addClass('storeify-first-alert');
        }
        // window.onload = initMap;
        jQuery( document ).ready(function() {
           //console.log( "storeify Load map" );
          if(!map) initMap();
        });

        jQuery('#radius_search').on("change mousemove", function() {
            jQuery('#radius-value .num-range').html(jQuery(this).val());
        });
        jQuery(document).on("submit", "#frm-storelocator-search", function(e) {
            e.preventDefault();

            if (jQuery('.chose-search-slt').val() == 'location') {
                if (search_mode == 1)
                    loadGeolocationCountry();
                else
                    searchLocation(null);

            }
            if (jQuery('.chose-search-slt').val() == 'product') {
                searchStoresByProducts();
            }
            if (jQuery('.chose-search-slt').val() == 'store') {
                searchStoresByName();
            }

        });
        jQuery(document).on('click', '#reset-search', function(e) {
            e.preventDefault();
            // console.log('111');
            if (marker_search != null) marker_search.setMap(null);
            if(infowindow) infowindow.close();
            jQuery('#results-empty').html('<h5></h5>');
            jQuery('#address,#product_search').val('');
            jQuery('#radius_search').val(radius_default);
            jQuery('.num-range').html(radius_default);
            jQuery(".storeifyapp_stores_tags_filter").prop("checked", false);
            jQuery("input[name=stores_country_filter][value=all]").prop("checked", true);
            var count_marker = 0;
            for (var i = 0; i < gmarkers.length; i++) {
                marker = gmarkers[i];
                if (list_mode != 1 || (list_mode == 1 && i < limit_store)) {
                    gmarkers[i].setVisible(true);
                    bounds.extend(marker.getPosition());
                    count_marker++;
                } else {
                    gmarkers[i].setVisible(false);
                }
            }
            if (count_marker > 1) {
                jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('results'));
            } else {
                jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('result'));
            }
            document.getElementById("num-rs").innerHTML = count_marker;
            //jQuery("#results-slt h3.title").show();
            jQuery("#main-slider-storelocator").removeClass('storeify-first-alert');
            if (center_lat == 0 && center_lng == 0) {
                map.fitBounds(bounds);
            } else {
                map.setZoom(initial_zoom);
                map.setCenter(new google.maps.LatLng(center_lat, center_lng));
                
            }
            if (list_mode == 2 || limit_store == 0) {
                jQuery("#results-slt h3.title").hide();
                jQuery("#main-slider-storelocator").addClass('storeify-first-alert');
            }
            jQuery("#results-slt").show();
            jQuery('#' + randomID).html(html_list);
            document.getElementById("loading_mask_loader").style.display = 'none';
        });
        jQuery(document).on('mouseover', '.inner-item', function() {
            onMouseover(jQuery(this).parent().attr("datamarker"));
        });
        jQuery(document).on('mouseout', '.inner-item', function() {
            onMouseover(jQuery(this).parent().attr("datamarker"));
        });
        jQuery(document).on('click', '.inner-item', function() {
            jQuery('#main-slider-storelocator .inner-item').removeClass('inner-item-active');
            jQuery(this).addClass('inner-item-active');
            num = jQuery(this).parent().attr("datamarker");
            google.maps.event.trigger(gmarkers[num], 'click');

        });
        jQuery('.storeify-modal-elon .storeify-close').on("click", function() {
            jQuery(this).parent().parent().parent().hide();
        });
        jQuery('.chose-search-slt').on("change", function() {
            if (jQuery(this).val() == 'location') {
                jQuery('.input-radius-slt').parent().show();
                jQuery('.gr-search-slt').show();
                //jQuery('.input-attribute-slt').hide();
                jQuery('#product_search').hide();
                jQuery('#store_search').hide();

            }
            if (jQuery(this).val() == 'product') {
                jQuery('.input-radius-slt').parent().hide();
                //jQuery('.input-attribute-slt').show();
                jQuery('#store_search').hide();
                jQuery('.gr-search-slt').hide();;
                jQuery('#product_search').show();

            }
            if (jQuery(this).val() == 'store') {
                jQuery('.input-radius-slt').parent().hide();
                //jQuery('.input-attribute-slt').show();
                jQuery('.gr-search-slt').hide();
                jQuery('#product_search').hide();
                jQuery('#store_search').show();

            }
        });
        jQuery(document).on('change', '.storeifyapp_stores_country_filter,.storeifyapp_stores_tags_filter', function(e) {
            e.preventDefault();
            jQuery('#loading_mask_loader').show();
            jQuery("#storeify-liststore-result").html('');
            setTimeout(function() {
                if (jQuery('.chose-search-slt').val() == 'location') {
                    if (jQuery('#frm-storelocator-search #address').val() != '') {
                        if (search_mode == 1)
                            loadGeolocationCountry();
                        else
                            searchLocation(null);
                    } else {

                        findbyTags();
                    }
                }
                if (jQuery('.chose-search-slt').val() == 'product') {
                    if (jQuery('#frm-storelocator-search #product_search').val() != '') {
                        searchStoresByProducts();
                    } else {
                        findbyTags();
                    }
                }
                if (jQuery('.chose-search-slt').val() == 'store') {
                    if (jQuery('#frm-storelocator-search #store_search').val() != '') {
                        searchStoresByName();
                    } else {
                        findbyTags();
                    }
                }
            }, 100);
        });
        jQuery(document).on('click', '#getbylocal', function() {
            loadGeolocation();
        });
        jQuery(document).on('click', '.map-tab-mobile-bnt-item', function(e) {
            if (jQuery(this).hasClass('active') && jQuery(this).data('val') == 'map-tab-ggmap' && jQuery(this).data('zoom')) {
                console.log(jQuery(this).data('zoom'));
                map.setZoom(jQuery(this).data('zoom'));
            }
        });
        jQuery(document).on("submit","#frm-storelocator-short-search",function(e) {
          e.preventDefault();
          document.getElementById("loading_mask_loader").style.display = '';

          var address = document.getElementById("address").value;
          var radius_search = document.getElementById("radius_search").value;

          if ((address == '' || address == null) && vals == "") {
            //alert(trans['please_enter']);
            jQuery('#address').focus();
            document.getElementById("loading_mask_loader").style.display = 'none';
            return false;
          }
          if ((radius_search == '' || radius_search == null) && vals == "") {
            //alert('Please enter a radius.');
            document.getElementById("loading_mask_loader").style.display = 'none';
            return false;
          }
          var focus_country = {address: address};
          if(priority_search != 'global'){
            focus_country = {address: address,componentRestrictions:{country: priority_search,}};
          }
          
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode(focus_country, function (results, status) {
            jQuery('#results-empty').html('');
            if (status == google.maps.GeocoderStatus.OK) {
              searchLocationsNearShort(results[0]);
            } else {
              document.getElementById("loading_mask_loader").style.display = 'none';
              document.getElementById("storeify-storeloctor-contactFrm").style.display = 'block';
              document.getElementById("num-rs").innerHTML = 0;
              jQuery("#storeify-text-result").text(jQuery("#storeify-text-result").data('result'));
              jQuery('#results-slt .list-custo-storeify').html('');
              jQuery('#results-empty').html('<h5 class="alert alert-danger">'+trans['store_near'] +'<i>"'+ address+'"</i></h5>');
              
            }

          });
          

        });
        jQuery(document).on("keydown","#frm-storelocator-search input",function(e) {
          if (e.which == 13) {
            e.preventDefault();
            jQuery("#frm-storelocator-search").trigger("submit");
          }
        });

        //
        jQuery(document).ready(function() {
            jQuery(document).on("click","#storeify-sl-btn-trigger-popup",function(e) {
                e.preventDefault();
                jQuery("#storeify-sl-light-modal-wrapper").addClass('show');
                if(jQuery("#storeify-sl-light-modal-wrapper").find('.storeify-sear-box').length){
                    h = jQuery("#storeify-sl-light-modal-wrapper").find('.storeify-sear-box').height()+540;
                    jQuery('#map').height(h);
                }
                jQuery("#reset-search").trigger("click");
            });
            
            jQuery(document).on("click",".storeify-sl-light-modal-close-icon",function(e) {
                e.preventDefault();
                jQuery("#storeify-sl-light-modal-wrapper").removeClass('show');
            });
            jQuery(document).on("click","#btn-filter",function(e) {
                e.preventDefault();
              if(!jQuery(this).hasClass('open')){
                jQuery(this).addClass('open');
                jQuery(this).next().addClass('open');
                h = jQuery('#filter-group').height();
                h2 = jQuery('#main-slider-storelocator').height();
                w = jQuery( window ).width();
                if(w > 720){
                  jQuery('#main-slider-storelocator').height(h2-h);
                }
                
              }else{
                h = jQuery('#filter-group').height();
                h2 = jQuery('#main-slider-storelocator').height();
                if(w > 720 && h2 < 450){
                  jQuery('#main-slider-storelocator').height(h2+h);
                }
                jQuery(this).removeClass('open');
                jQuery('#filter-group').removeClass('open');
              }
            });
        }); 
        
        

    }; //end storeifyappsJavaScript


    if (typeof jQuery == 'undefined' || typeof jQuery.fn.on == 'undefined'){
        loadScript('//code.jquery.com/jquery-3.4.1.min.js', function() {

            storeifyAPPS = jQuery.noConflict(true);

            storeifyAPPS(document).ready(function() {

                storeifyappsJavaScript(storeifyAPPS);

            });

        });

    } else {

        storeifyappsJavaScript(jQuery);

    }

})();