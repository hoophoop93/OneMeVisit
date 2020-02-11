package com.kmichali.onemivisit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAutoConfiguration
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class OneMiVisitApp {

	public static void main(String[] args) {
		SpringApplication.run(OneMiVisitApp.class, args);
	}

}
