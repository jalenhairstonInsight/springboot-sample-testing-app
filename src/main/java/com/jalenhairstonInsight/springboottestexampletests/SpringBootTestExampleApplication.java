package com.jalenhairstonInsight.springboottestexampletests;


import com.jalenhairstonInsight.springboottestexampletests.entity.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/employees")
public class SpringBootTestExampleApplication {



	public static void main(String[] args) {
		SpringApplication.run(SpringBootTestExampleApplication.class, args);
	}

	public SpringBootTestExampleApplication() {
	}
}
