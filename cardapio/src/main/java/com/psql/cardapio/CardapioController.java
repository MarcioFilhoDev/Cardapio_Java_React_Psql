package com.psql.cardapio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CardapioController {

    @Autowired
    private CardapioRepo cardapioRepo;

    //  Inserindo novo registro
    @PostMapping("/newproduct")
    public Produto newProduct(@RequestBody Produto novoProduto) {
        return cardapioRepo.saveAndFlush(novoProduto);
    }

    //  Deletando por ID
    @DeleteMapping("/deleteproduct/{id}")
    public ResponseEntity<Produto> deleteProduct(@PathVariable Long id) {
        //  Verifica se existe um produto com esse id
        Produto response = cardapioRepo.findById(id).orElse(null);

        //  Verifica se o resultado que encontrou é diferente de nulo
        if(response != null) {
            //  Se é diferente é um id válido, logo é deletado
            cardapioRepo.deleteById(id);
        }

        //  Retorna o produto deletado ou então nulo caso id não exista
        return ResponseEntity.ok(response);
    }

    //  Atualizando por ID
    @PutMapping("/update/{id}")
    public String updateProduct(@PathVariable Long id, @RequestBody Produto produto){
        Produto findById = cardapioRepo.findById(id).orElse(null);

        if(findById != null) {
            findById.setTitle(produto.getTitle() != null ? produto.getTitle() : findById.getTitle());
            findById.setPrice(produto.getPrice() != null ? produto.getPrice() : findById.getPrice());
            findById.setImage(produto.getImage() != null ? produto.getImage() : findById.getImage() );
            cardapioRepo.save(findById);
        }

        return "Produto alterado com sucesso";
    }

    //  Listando todos
    @GetMapping("/products")
    public List<Produto> getAllProducts(){
        return cardapioRepo.findAll();
    }

    //  Listando por ID
    @GetMapping("/products/{id}")
    public Produto getProductById(@PathVariable Long id){
        return cardapioRepo.findById(id).orElse(null);
    }
}
