package com.infobase.cadastro;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@EnableResourceServer
@SpringBootApplication
public class CadastroApplication {

	public static void main(String[] args) {
		SpringApplication.run(CadastroApplication.class, args);
	}


@Bean
    ApplicationRunner init(UsuarioRepository repository) {
        return args -> {
            Stream.of("Carlos", "Eduardo", "Gabriel", "Betânia").forEach(name -> {
                Usuario usuario = new Usuario();
                usuario.setNome(name);
				usuario.setEmail("email@"+name);
				usuario.setCpf("000.000.000-00");
				usuario.setTelefone("00 0000-0000");
				usuario.setAdiministrador(false);
                repository.save(usuario);
            });
            repository.findAll().forEach(System.out::println);
        };
    }

}
