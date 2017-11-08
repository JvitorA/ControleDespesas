package br.com.jvitoraa.cdesp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;

import br.com.jvitoraa.cdesp.configuration.JpaConfiguration;

/**
 * Spring boot runne
 * @author jalmeial
 *
 */
@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages={"br.com.jvitoraa.cdesp"})
public class ControleDespesasApp extends SpringBootServletInitializer{
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ControleDespesasApp.class);
    }
	
	
	
	 public static void main(String[] args) {
	        SpringApplication.run(ControleDespesasApp.class, args);
	    }
}
