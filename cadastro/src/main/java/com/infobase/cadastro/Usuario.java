package com.infobase.cadastro;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
public class Usuario {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String nome;
    private String cpf;
    private String email;
    private String telefone;
    private boolean isAdiministrador;

}