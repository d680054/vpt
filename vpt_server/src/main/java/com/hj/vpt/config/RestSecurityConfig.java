package com.hj.vpt.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by David.Zheng on 26/07/2017.
 */
@Configuration
@EnableWebSecurity
public class RestSecurityConfig extends WebSecurityConfigurerAdapter
{
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/api/**").access("hasRole('USER') or hasRole('ADMIN')")
				.anyRequest().authenticated()
				.and().httpBasic();
		http.exceptionHandling().accessDeniedPage("/403");
		http.csrf().disable();
		http.headers().frameOptions().disable();

	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
				.withUser("ptvaustralia").password("{noop}&7nJR>M{WdW!4ZP").roles("USER");
//				.and()
//				.withUser("wx_vbank").password("Yz66*Z4u").roles("ADMIN");
	}

}
