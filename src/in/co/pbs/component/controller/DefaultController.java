package in.co.pbs.component.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DefaultController {

	@RequestMapping(method = RequestMethod.GET, value = "index.html")
	public ModelAndView loadDefaultPage() {
		final ModelAndView modelAndView = new ModelAndView("home");
		modelAndView.addObject("title", "VOHPLE");
		modelAndView.addObject("description", "Pin your memory");
		return modelAndView;
	}
}
