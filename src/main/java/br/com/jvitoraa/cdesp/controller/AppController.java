package br.com.jvitoraa.cdesp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller
 * @author jalmeial
 *
 */
@Controller
public class AppController {
	@RequestMapping("/")
    String home(ModelMap modal) {
        modal.addAttribute("title","Controle de Despesas");
        return "index";
    }
	
	@RequestMapping("/partials/{page}")
    String partialHandler(@PathVariable("page") final String page) {
        return page;
    }
}	
