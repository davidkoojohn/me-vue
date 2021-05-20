import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600'
})

Mock.mock('/api/test', 'get', {
  status: 200,
  message: '获取商品信息成功',
  "data|5-10": [
    {
      "id|+1": 1,
      "protocol": "@protocol()",
      "domain": "@domain()",
      "website": "@url()",
      "r_name": "@name()",
      "cfirst": "@cfirst()",
      "clast": "@clast()",
      "cname": "@cname()",
      "ctitle": "@ctitle(10, 20)",
      "cword": "@cword(3, 10)",
      "csentence": "@csentence(3, 5)",
      "cparagraph": "@cparagraph(1, 3)",
      "title": "@title(10, 20)",
      "word": "@word(3, 10)",
      "sentence": "@sentence(3, 5)",
      "detail": "@paragraph(1, 3)",
      "color_rgba": "@rgba()",
      "color_hex": "@hex()",
      "color": "@color()",
      "poster": Mock.Random.image('100x100', 'red', '#FFF', 'png', '!!!'),
      "bg": Mock.Random.dataImage('200x100', 'Hello Man!'),
      "avatar": "@image('200x200')",
      "now": "@now('yyyy-MM-dd a HH:mm:ss SS')",
      "updated_at": "@datetime('yyyy-MM-dd A HH:mm:ss')",
      "created_at": "@date('yyyy-MM-dd')",
      "time": "@time('HH:mm:ss')",
      "range": "@range(10, 20, 2)",
      "username": "@string('lower', 5)",
      "username_upper": "@string('upper', 10, 20)",
      "username_number": "@string('number', 10)",
      "character": "@character('hello')",
      "view_count": "@integer(1000, 9999)",
      "score": "@natural(0, 100)",
      "is_admin": "@boolean",
      "name|3-10": "*",
      "like|1-50": 50,
      "price|1-10000.2": 1,
      "dart|1": true,
      "is_public": "@boolean(1, 2, true)",
      "mail": Mock.Random.email('@qq.com'),
    }
  ]
})

export default Mock;
