package br.com.jvitoraa.cdesp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.jvitoraa.cdesp.model.Despesa;
import br.com.jvitoraa.cdesp.service.DespesaService;

@RestController
@RequestMapping("/api")
public class RestApiController {
	@Autowired
    DespesaService despesaService;
	
	@RequestMapping(value = "/despesa/", method = RequestMethod.GET)
    public ResponseEntity<List<Despesa>> listAllDespesas() {
        List<Despesa> despesas = despesaService.findAllDespesas();
        if (despesas.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Despesa>>(despesas, HttpStatus.OK);
    }
	
	@RequestMapping(value = "/despesa/", method = RequestMethod.POST)
    public ResponseEntity<?> createDespesa(@RequestBody Despesa despesa, UriComponentsBuilder ucBuilder) {
		despesaService.saveDespesa(despesa);
 
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/api/despesa/{id}").buildAndExpand(despesa.getId()).toUri());
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }
	
	@RequestMapping(value = "/despesa/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteDespesa(@PathVariable("id") long id) {

        despesaService.deleteDespesaById(id);
        return new ResponseEntity<Despesa>(HttpStatus.NO_CONTENT);
    }
}
