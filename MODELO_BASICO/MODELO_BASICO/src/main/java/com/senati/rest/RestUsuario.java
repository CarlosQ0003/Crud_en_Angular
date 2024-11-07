package com.senati.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.senati.interfaz.IUsuario;
import com.senati.modelo.Usuario;

@RestController
@RequestMapping("/rest_usu")
@CrossOrigin(origins = "http://localhost:4200")
public class RestUsuario {

    @Autowired
    private IUsuario data;

    @GetMapping("/listar")
    public List<Usuario> listar() {
        return (List<Usuario>) data.findAll();
    }

    @GetMapping("/listar/{id}")
    public Optional<Usuario> listarId(@PathVariable("id") Integer id) {
        return data.findById(id);
    }

    @PostMapping("/registrar")
    public void insertar(@RequestBody Usuario usu) {
        data.save(usu);
    }

    @PutMapping("/actualiza/{id}")
    public void modificar(@PathVariable("id") Integer id, @RequestBody Usuario usu) {
        Optional<Usuario> usuarioExistente = data.findById(id);
        if (usuarioExistente.isPresent()) {
            usu.setId(id); 
            data.save(usu); 
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado");
        }
    }

    @DeleteMapping("/elimina/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        data.deleteById(id);
    }
}
