package br.com.jvitoraa.cdesp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.jvitoraa.cdesp.model.Despesa;
import br.com.jvitoraa.cdesp.repo.DespesaRepository;

/**
 * Implementação da interface de serviço
 * @author jalmeial
 *
 */
@Service("despesaService")
@Transactional
public class DespesaServiceImpl implements DespesaService{
	
	@Autowired
	private DespesaRepository despesaRepository;
	
	public Despesa findById(Long id) {
		return despesaRepository.findOne(id);
	}

	public void saveDespesa(Despesa despesa) {
		despesaRepository.save(despesa);
		
	}

	public void deleteDespesaById(Long id) {
		despesaRepository.delete(id);
	}

	public List<Despesa> findAllDespesas() {
		return despesaRepository.findAll();
	}

}
