package com.trudiary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.trudiary.controller"})
public class TruDiaryApplication {
    public static void main(String[] args) {
        SpringApplication.run(TruDiaryApplication.class, args);}
}
