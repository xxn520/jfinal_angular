package com.demo.blog;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;

/**
 * BlogController
 * 所有 sql 写在 Model 或 Service 中，不要写在 Controller 中，养成好习惯，有利于大型项目的开发与维护
 */
@Before(BlogInterceptor.class)
public class BlogController extends Controller {
	
	public void index() {
        render("Index.html");
	}
	
	public void getlist(){
            renderJson(Blog.dao.findByPagenum(getParaToInt()));
	}
	
	public void add() {
	}
	
	@Before(BlogValidator.class)
	public void save() {
		getModel(Blog.class).save();
		redirect("/");
	}
	
	public void edit() {
		renderJson(Blog.dao.findById(getParaToInt()));
	}
	
	@Before(BlogValidator.class)
	public void update() {
		getModel(Blog.class).update();
		redirect("/");
	}
	
	public void delete() {
        System.out.print(getParaToInt(0));
		Blog.dao.deleteById(getParaToInt(0));
        renderJson(Blog.dao.findByPagenum(getParaToInt(1)));
	}
}


