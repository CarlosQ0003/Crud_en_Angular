package com.senati.interfaz;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.senati.modelo.Usuario;

@Repository
public interface IUsuario extends CrudRepository<Usuario, Integer> {
}
