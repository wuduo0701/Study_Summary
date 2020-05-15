package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"text/template"

	"github.com/gin-gonic/gin"
)

type Product struct { //schema
	Id   int64  `json:"id"`
	Name string `json:"name"`
}

// 数据库要给出的数据
// 第一次去取他， 之后用生成的html文件返回
var allproduct []*Product = []*Product{
	{1, "苹果手机"},
	{2, "小米手机"},
	{3, "华为手机"},
}

var (
	// 生成的Html 保存目录
	htmlOutPath = "./tem"
	// 静态文件模板目录
	templatePath = "./tem"
)

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("tem/*") // 指定views在哪里
	r.GET("/index", func(c *gin.Context) {
		GetGenerateHtml()
		c.HTML(http.StatusOK, "index.html", gin.H{
			"allproduct": allproduct,
		})
	})
	//	一个页面生成并且更新静态文件，生成新的文件， 这个文件提供给用户看的
	// 即那个页面隔断时间更新， 生成的文件就是静态文件，就不是用户访问时时刻刻的去读取数据库文件等了
	r.GET("/index2", func(c *gin.Context) {
		c.HTML(http.StatusOK, "htmlindex.html", gin.H{})
	})
	r.Run()
}

func GetGenerateHtml() {
	//  :=
	contentTmp, err := template.ParseFiles(filepath.Join(templatePath, "index.html"))
	if err != nil {
		fmt.Println("获取模板文件失败")
	}
	fileName := filepath.Join(htmlOutPath, "htmlindex.html")
	generateStaticHtml(contentTmp, fileName, gin.H{"allproduct": allproduct})
}

func generateStaticHtml(template *template.Template,
	fileName string, product map[string]interface{}) {
	// if (exist(fil))
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, os.ModePerm)
	if err != nil {
		fmt.Println("打开文件失败")
	}
	defer file.Close()
	template.Execute(file, &product)
}
