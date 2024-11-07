package com.senati.interfazservices;

import java.util.List;
import java.util.Optional;
import com.senati.modelo.Usuario;

public interface IUsuarioServices {
    List<Usuario> listar();
    Optional<Usuario> listarId(int id);
    int save(Usuario usu);
    void delete(int id);
}
